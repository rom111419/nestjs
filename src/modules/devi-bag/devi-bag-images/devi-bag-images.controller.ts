import { Controller, Get, Param } from '@nestjs/common';
import { readFileSync } from 'fs';

@Controller('devi-bag-images')
export class DeviBagImagesController {
  @Get()
  getHello(): any[] {
    const file = readFileSync('settings/devi-bag/devi-bag-images.json', {
      encoding: 'utf8',
    });
    return JSON.parse(file);
  }

  @Get('/titleImages/:id')
  findAllByTagId(@Param('id') tagId: string): any[] {
    const file = readFileSync('settings/devi-bag/devi-bag-images.json', {
      encoding: 'utf8',
    });
    return JSON.parse(file).filter(
      (it) => it.tagsId.includes(tagId) && it.isTitle,
    );
  }

  @Get('/detail/:id')
  findByImageId(@Param('id') productId: string): any[] {
    const file = readFileSync('settings/devi-bag/devi-bag-images.json', {
      encoding: 'utf8',
    });
    return JSON.parse(file).filter((it) => it.productIds.includes(productId));
  }
}
