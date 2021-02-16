import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@app/auth';
import { GuitarModule } from './guitars/guitar.module';
import { HttpExceptionFilter } from '@app/error-handler';

@Module({
  imports: [GuitarModule, AuthModule, HttpExceptionFilter],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
