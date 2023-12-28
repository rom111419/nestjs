import { Test, TestingModule } from '@nestjs/testing';
import { TextsService } from './texts.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Text } from './entities/text.entity';

describe('TextsService', () => {
  let service: TextsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<TextsService>(TextsService);
  });

  it('should be defined', () => {
    const result: Text[] = [{ id: 33, value: '34' }];
    jest.spyOn(service, 'findAll').mockImplementation(async () => result);
    expect(service).toBeDefined();
  });
  it('should be return texts table', () => {
    expect(service.findAll()).toBeDefined();
  });
});
