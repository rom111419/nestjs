import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { NODE_ENV } from './modules/app/app.config';
import { RunSwagger } from './modules/swagger/swagger.config';
import { join } from 'path';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule, {
    cors: true,
    rawBody: true,
  });
  RunSwagger(app);
  console.log('environment: ' + NODE_ENV);

  await app.listen(3000);
}

bootstrap();
