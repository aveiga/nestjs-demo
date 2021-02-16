import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@app/auth';
import { GuitarModule } from './guitars/guitar.module';

@Module({
  imports: [GuitarModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
