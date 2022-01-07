import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 5041,
      username: 'root',
      password: 'USERNAME_PASSWORD',
      database: 'ritmby',
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class DbModule {}
