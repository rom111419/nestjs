import { Test, TestingModule } from '@nestjs/testing';
import { DeviBagTagsController } from './devi-bag-tags.controller';

describe('DeviBagTagsController', () => {
  let controller: DeviBagTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeviBagTagsController],
    }).compile();

    controller = module.get<DeviBagTagsController>(DeviBagTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
