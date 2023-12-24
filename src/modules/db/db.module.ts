import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { APP_ENV } from '../app/app.config';
import { EnvironmentModule } from '../app/environment.module';

const typeOrmOptions: () => TypeOrmModuleOptions = () => {
  return {
    type: APP_ENV().DATA_BASE_TYPE as 'mysql',
    host: APP_ENV().DATA_BASE_HOST,
    port: +APP_ENV().DATA_BASE_PORT,
    username: APP_ENV().DATA_BASE_USERNAME,
    password: APP_ENV().DATA_BASE_PASSWORD,
    database: APP_ENV().DATA_BASE_DATABASE,
    synchronize: Boolean(APP_ENV().DATA_BASE_SYNCHRONIZE),
    autoLoadEntities: Boolean(APP_ENV().DATA_BASE_AUTOLOAD_ENTITIES),
  };
};

@Module({
  controllers: [],
  imports: [EnvironmentModule(), TypeOrmModule.forRoot(typeOrmOptions())],
})
export class DbModule {}
