import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { NODE_ENV } from './modules/app/app.config';
import { RunSwagger } from './modules/swagger/swagger.config';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  RunSwagger(app);
  app.enableCors();
  console.log('environment: ' + NODE_ENV);

  await app.listen(3000);
}

bootstrap();
