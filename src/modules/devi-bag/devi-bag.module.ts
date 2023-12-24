import { Module } from '@nestjs/common';
import { DeviBagImagesController } from './devi-bag-images/devi-bag-images.controller';
import { DeviBagTagsController } from './devi-bag-tags/devi-bag-tags.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  controllers: [DeviBagImagesController, DeviBagTagsController],

  imports: [
    MulterModule.register({
      dest: './settings/devi-bag/',
      storage: diskStorage({
        destination: './settings/devi-bag/',
        filename: (req, file, callback) => {
          callback(null, `${file.originalname}`);
        }
      })
    })
  ]
})
export class DeviBagModule {
}
