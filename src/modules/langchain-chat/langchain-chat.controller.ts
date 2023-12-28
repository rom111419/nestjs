import { Controller, Get, UseGuards } from '@nestjs/common';
import { LangchainChatService } from './langchain-chat.service';
import { BaseMessage } from 'langchain/schema';
import { GoogleOAuthGuard } from '../google-auth/google-oauth.guard';

@Controller('langchain-chat')
export class LangchainChatController {
  constructor(private readonly langchainChatService: LangchainChatService) {}

  @Get('llm/predict')
  @UseGuards(GoogleOAuthGuard)
  async getLLMPrediction(): Promise<string> {
    const text = 'Сколько планет в солнечной системе?';
    return this.langchainChatService.getLLMPrediction(text);
  }

  @Get('llm/predictMessages')
  async getLLMPredictions(): Promise<BaseMessage> {
    const text = 'Сколько планет в солнечной системе?';
    return this.langchainChatService.getLLMPredictMessages(text);
  }

  @Get('chatmodel/predict')
  async getChatModelPrediction(): Promise<string> {
    const text = 'Сколько планет в солнечной системе?';
    return this.langchainChatService.getChatModelPrediction(text);
  }
  @Get('chatmodel/predictMessages')
  async getChatModelPredictions(): Promise<BaseMessage> {
    const text = 'Сколько планет в солнечной системе?';
    return this.langchainChatService.getChatModelPredictionMessages(text);
  }

  @Get('chatmodel/formattedPrompt')
  async getChatModelFormattedPrompt(): Promise<string> {
    const text = 'What is a good name for a company that makes {product}?';
    const templ = {
      product: 'colorful socks',
    };
    return this.langchainChatService.getChatPromptTemplate(text, templ);
  }
  @Get('chatmodel/getChatPromptTemplateFromMessages')
  async getChatPromptTemplateFromMessages(): Promise<BaseMessage[]> {
    return this.langchainChatService.getChatPromptTemplateFromMessages();
  }

  @Get('chatmodel/getChatPipeParser')
  async getChatPipeParser(): Promise<string[]> {
    return this.langchainChatService.getChatPipeParser();
  }
  @Get('chatmodel/getChatHNSWLib')
  async getChatHNSWLib(): Promise<string> {
    return this.langchainChatService.getChatHNSWLib();
  }
}
