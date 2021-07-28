import { Module } from '@nestjs/common';
import { DeviBagImagesController } from './devi-bag-images/devi-bag-images.controller';
import { DeviBagTagsController } from "./devi-bag-tags/devi-bag-tags.controller";

@Module({
  controllers: [DeviBagImagesController, DeviBagTagsController]
})
export class DeviBagModule {}
