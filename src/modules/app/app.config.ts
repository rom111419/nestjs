import { dataBaseENV, DataBaseConfigI } from '../db/db.config';
import { dataSwaggerConfig, SwaggerConfigI } from '../swagger/swagger.config';

type NODE_ENV = 'dev' | 'prod';
export const NODE_ENV: NODE_ENV = process.env.NODE_ENV as NODE_ENV;
export const envFilePath = NODE_ENV === 'prod' ? '.prod.env' : '.env';

export interface AppConfig extends DataBaseConfigI {
  APP_ROOT_USER: string;
  APP_ROOT_PASSWORD: string;
  APP_HOST: string;
  APP_PORT: string;
  swagger: SwaggerConfigI;
}

export const APP_ENV = () =>
  ({
    APP_ROOT_USER: process.env.APP_ROOT_USER,
    APP_ROOT_PASSWORD: process.env.APP_ROOT_PASSWORD,
    APP_HOST: process.env.APP_HOST,
    APP_PORT: process.env.APP_PORT,
    ...dataBaseENV(),
    swagger: dataSwaggerConfig(),
  }) as AppConfig;
