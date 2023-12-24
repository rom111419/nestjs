import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export interface SwaggerConfigI {
  SWAGGER__TITLE: string;
  SWAGGER__DESCRIPTION: string;
  SWAGGER__VERSION: string;
  SWAGGER__TAG: string;
  SWAGGER__PATH: string;
}

export const dataSwaggerConfig: () => SwaggerConfigI = () => ({
  SWAGGER__TITLE: process.env.SWAGGER__TITLE,
  SWAGGER__DESCRIPTION: process.env.SWAGGER__DESCRIPTION,
  SWAGGER__VERSION: process.env.SWAGGER__VERSION,
  SWAGGER__TAG: process.env.SWAGGER__TAG,
  SWAGGER__PATH: process.env.SWAGGER__PATH,
});

const config: (env: SwaggerConfigI) => Omit<OpenAPIObject, 'paths'> = (
  env: SwaggerConfigI,
) =>
  new DocumentBuilder()
    .setTitle(env.SWAGGER__TITLE)
    .setDescription(env.SWAGGER__DESCRIPTION)
    .setVersion(env.SWAGGER__VERSION)
    .addTag(env.SWAGGER__TAG)
    .build();

const createDocument = (app: INestApplication) => {
  const env = dataSwaggerConfig();
  return SwaggerModule.createDocument(app, config(env));
};

export const RunSwagger = (app: INestApplication) => {
  const env = dataSwaggerConfig();
  return SwaggerModule.setup(env.SWAGGER__PATH, app, createDocument(app));
};
