import { Controller, Get } from '@nestjs/common';
import { readFileSync } from "fs";

@Controller('devi-bag-images')
export class DeviBagImagesController {
  @Get()
  getHello(): any[] {
    const file = readFileSync('settings/devi-bag/devi-bag-images.json', {
      encoding: 'utf8'
    })
    return JSON.parse(file);
  }
}
