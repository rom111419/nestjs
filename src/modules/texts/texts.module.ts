import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Text } from './entities/text.entity';
import { TextsController } from './texts.controller';
import { TextsService } from './texts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Text])],
  controllers: [TextsController],
  providers: [TextsService],
  exports: [TypeOrmModule],
})
export class TextsModule {}
