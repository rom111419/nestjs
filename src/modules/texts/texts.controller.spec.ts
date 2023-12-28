import { Test, TestingModule } from '@nestjs/testing';
import { TextsController } from './texts.controller';
import { TextsService } from './texts.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Text } from './entities/text.entity';

describe('TextsController', () => {
  let controller: TextsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextsController],
      providers: [
        TextsService,
        {
          provide: getRepositoryToken(Text),
          useValue: {
            find: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TextsController>(TextsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
