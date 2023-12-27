import { Module } from '@nestjs/common';
import { EnvironmentModule } from '../app/environment.module';
import { LangchainChatService } from './langchain-chat.service';
import { LangchainChatController } from './langchain-chat.controller';

@Module({
  imports: [EnvironmentModule()],
  providers: [LangchainChatService],
  exports: [LangchainChatService],
  controllers: [LangchainChatController],
})
export class LangchainChatModule {}
