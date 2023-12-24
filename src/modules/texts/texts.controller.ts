import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TextsService } from './texts.service';
import { CreateTextDto } from './dto/create-text.dto';
import { UpdateTextDto } from './dto/update-text.dto';
import { Text } from './entities/text.entity';

@Controller('texts')
export class TextsController {
  constructor(private readonly textsService: TextsService) {}

  @Post()
  create(@Body() createTextDto: CreateTextDto) {
    return this.textsService.create(createTextDto);
  }

  @Get()
  findAll(): Promise<Text[]> {
    return this.textsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Text> {
    return this.textsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTextDto: UpdateTextDto) {
    return this.textsService.update(+id, updateTextDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textsService.remove(+id);
  }
}
