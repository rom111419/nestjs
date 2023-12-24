import { APP_ENV, envFilePath } from './app.config';
import { ConfigModule } from '@nestjs/config';

export const EnvironmentModule = () => {
  return ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: [envFilePath],
    load: [APP_ENV],
  });
};
