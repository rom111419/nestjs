import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentModule } from './modules/app/environment.module';
import { DbModule } from './modules/db/db.module';

/*import { DeviBagModule } from './modules/devi-bag/devi-bag.module';

import { DbModule } from './modules/db/db.module';

import { TextsModule } from './modules/texts/texts.module';*/

@Module({
  imports: [
    EnvironmentModule(),
    DbModule,
    /* DeviBagModule , DbModule , TextsModule */
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
