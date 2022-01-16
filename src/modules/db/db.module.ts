import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

const env: string = process.env.NODE_ENV;
const type: 'mysql' = process.env.TYPE as 'mysql';
const host: string = process.env.HOST;
const port: string = process.env.PORT;
const username: string = process.env.USERNAME;
const password: string = process.env.PASSWORD;
const database: string = process.env.DATABASE;
console.log(username);
console.log(database);

const devOptions: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'localhost',
  port: 5041,
  username: 'root',
  password: 'USERNAME_PASSWORD',
  database: 'ritmby',
  synchronize: true,
  autoLoadEntities: true,
};

const prodOptions: TypeOrmModuleOptions = {
  type: type,
  host: host,
  port: +port,
  username: username,
  password: password,
  database: database,
  synchronize: true,
  autoLoadEntities: true,
};

const typeOrmOptions = env === 'prod' ? prodOptions : devOptions;

@Module({
  controllers: [],
  imports: [TypeOrmModule.forRoot(typeOrmOptions)],
})
export class DbModule {}
