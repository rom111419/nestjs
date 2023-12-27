import { GoogleStrategy } from './google.strategy';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GoogleOauthController } from './google-oauth.controller';
import { GoogleOauthService } from './google-oauth.service';
import { EnvironmentModule } from '../app/environment.module';

@Module({
  imports: [EnvironmentModule(), ConfigModule.forRoot()],
  controllers: [GoogleOauthController],
  providers: [GoogleOauthService, GoogleStrategy],
})
export class GoogleOauthModule {}
