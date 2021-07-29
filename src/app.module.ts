import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviBagModule } from "./modules/devi-bag/devi-bag.module";

@Module({
  imports: [DeviBagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
