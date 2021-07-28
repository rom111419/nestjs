import { Test, TestingModule } from '@nestjs/testing';
import { DeviBagImagesController } from './devi-bag-images.controller';

describe('DeviBagImagesController', () => {
  let controller: DeviBagImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeviBagImagesController],
    }).compile();

    controller = module.get<DeviBagImagesController>(DeviBagImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
