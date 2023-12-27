// openai.service.ts
import { Injectable } from '@nestjs/common';
import { OpenAI } from 'langchain/llms/openai';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { BaseMessage, HumanMessage } from 'langchain/schema';
import { ChatPromptTemplate, PromptTemplate } from 'langchain/prompts';
import { LangchainChatT } from './langchain-chat.interface';
import type { TypedPromptInputValues } from '@langchain/core/dist/prompts/base';
import {
  CommaSeparatedListOutputParser,
  StringOutputParser,
} from 'langchain/schema/output_parser';
import { HNSWLib } from 'langchain/vectorstores/hnswlib';
import {
  RunnableLambda,
  RunnableMap,
  RunnablePassthrough,
} from 'langchain/runnables';
import { Document } from 'langchain/document';
import { APP_ENV } from '../app/app.config';

@Injectable()
export class LangchainChatService {
  private readonly llm = new OpenAI({
    temperature: 0.9,
    openAIApiKey: APP_ENV().OPEN_AI_API_KEY,
  });
  private readonly openAIEmbeddings = new OpenAIEmbeddings({
    openAIApiKey: APP_ENV().OPEN_AI_API_KEY,
  });
  private readonly chatOpenAI = new ChatOpenAI({
    temperature: 0.9,
    openAIApiKey: APP_ENV().OPEN_AI_API_KEY,
  });
  messages = (text: string) => [new HumanMessage({ content: text })];

  async getLLMPrediction(text: string): Promise<string> {
    return this.llm.predict(text);
  }

  async getLLMPredictMessages(text: string): Promise<BaseMessage> {
    return this.llm.predictMessages(this.messages(text));
  }

  async getChatModelPrediction(text: string): Promise<string> {
    return this.chatOpenAI.predict(text);
  }

  async getChatModelPredictionMessages(text: string): Promise<BaseMessage> {
    return this.chatOpenAI.predictMessages(this.messages(text));
  }

  async getChatPromptTemplate(
    text: string,
    promptValue: TypedPromptInputValues<LangchainChatT>,
  ): Promise<string> {
    const prompt = PromptTemplate.fromTemplate(text);
    return prompt.format(promptValue);
  }

  async getChatPromptTemplateFromMessages(): Promise<BaseMessage[]> {
    const template =
      'You are a helpful assistant that translates {input_language} into {output_language}.';
    const humanTemplate = '{text}';

    const chatPrompt = ChatPromptTemplate.fromMessages([
      ['system', template],
      ['human', humanTemplate],
    ]);
    return chatPrompt.formatMessages({
      input_language: 'English',
      output_language: 'French',
      text: 'I love programming.',
    });
  }

  async getChatPipeParser(): Promise<string[]> {
    const template = `You are a helpful assistant who generates comma separated lists. A user will pass in a category, and you should generate 5 objects in that category in a comma separated list. ONLY return a comma separated list, and nothing more.`;

    const humanTemplate = '{text}';

    const chatPrompt = ChatPromptTemplate.fromMessages([
      ['system', template],
      ['human', humanTemplate],
    ]);

    const parser = new CommaSeparatedListOutputParser();

    const chain = chatPrompt.pipe(this.chatOpenAI).pipe(parser);

    return await chain.invoke({
      text: 'ui elements',
    });
  }

  async getChatHNSWLib(): Promise<string> {
    const vectorStore = await HNSWLib.fromDocuments(
      [
        new Document({ pageContent: 'Harrison worked at Kensho' }),
        new Document({ pageContent: 'Bears like to eat honey.' }),
      ],
      this.openAIEmbeddings,
    );
    const retriever = vectorStore.asRetriever(1);

    const prompt = ChatPromptTemplate.fromMessages([
      [
        'ai',
        `Answer the question based on only the following context: {context}`,
      ],
      ['human', '{question}'],
    ]);
    const outputParser = new StringOutputParser();

    const setupAndRetrieval = RunnableMap.from({
      context: new RunnableLambda({
        func: (input: string) =>
          retriever.invoke(input).then((response) => response[0].pageContent),
      }).withConfig({ runName: 'contextRetriever' }),
      question: new RunnablePassthrough(),
    });
    const chain = setupAndRetrieval
      .pipe(prompt)
      .pipe(this.chatOpenAI)
      .pipe(outputParser);

    return chain.invoke('Where did Harrison work?');
  }
}
