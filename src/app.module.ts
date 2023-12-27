import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentModule } from './modules/app/environment.module';
import { DbModule } from './modules/db/db.module';

/*import { DeviBagModule } from './modules/devi-bag/devi-bag.module';

import { DbModule } from './modules/db/db.module';

import { TextsModule } from './modules/texts/texts.module';*/
import { LangchainChatModule } from './modules/langchain-chat/langchain-chat.module';
import { TextsModule } from './modules/texts/texts.module';
import { GoogleOauthModule } from './modules/google-auth/google-oauth.module';

@Module({
  imports: [
    EnvironmentModule(),
    GoogleOauthModule,
    DbModule,
    LangchainChatModule,
    TextsModule,
    /* DeviBagModule , TextsModule */
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
