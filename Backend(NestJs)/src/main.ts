import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as cors from 'cors';


// dotenv.config(); 


async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
