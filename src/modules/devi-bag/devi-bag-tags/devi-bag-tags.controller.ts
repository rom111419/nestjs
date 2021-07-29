import { Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { JSON_FILE_FILTER } from "../utils/image-file.filter";
import {readFileSync} from 'fs'
import { json } from "express";

@Controller('devi-bag-tags')
export class DeviBagTagsController {
  @Get()
  getDeviBagTags(): any[] {
    const file = readFileSync('settings/devi-bag/devi-bag-tags.json', {
      encoding: 'utf8'
    })
    return JSON.parse(file);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: JSON_FILE_FILTER
    }),
  )
  uploadFile(@UploadedFile() file) {
    console.log(file);
    return file;
  }

}
