import { Injectable } from '@nestjs/common';
import { CreateTextDto } from './dto/create-text.dto';
import { UpdateTextDto } from './dto/update-text.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Text } from './entities/text.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class TextsService {
  constructor(
    @InjectRepository(Text)
    private readonly textsRepository: Repository<Text>,
  ) {}

  create(createTextDto: CreateTextDto) {
    const user: Text = new Text();
    user.value = createTextDto.value;
    return this.textsRepository.save(user);
  }

  async findAll(): Promise<Text[]> {
    return this.textsRepository.find();
  }

  findOne(id: number): Promise<Text> {
    return this.textsRepository.findOne(id);
  }

  update(id: number, updateTextDto: UpdateTextDto) {
    const user: Text = new Text();
    user.value = updateTextDto.value;
    return this.textsRepository.update(id, user);
  }

  async remove(id: number): Promise<void> {
    await this.textsRepository.delete(id);
  }
}
