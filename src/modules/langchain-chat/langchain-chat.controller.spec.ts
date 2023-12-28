import { Test, TestingModule } from '@nestjs/testing';
import { LangchainChatController } from './langchain-chat.controller';
import { EnvironmentModule } from '../app/environment.module';
import { LangchainChatService } from './langchain-chat.service';

describe('LangchainChatController', () => {
  let controller: LangchainChatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EnvironmentModule()],
      providers: [LangchainChatService],
      exports: [LangchainChatService],
      controllers: [LangchainChatController],
    }).compile();

    controller = module.get<LangchainChatController>(LangchainChatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
