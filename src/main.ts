import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  app.enableCors();
  console.log('environment: ' + process.env.NODE_ENV);
  await app.listen(3000);
}

bootstrap();
