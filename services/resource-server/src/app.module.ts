import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GuitarModule } from './guitars/guitar.module';

@Module({
  imports: [GuitarModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
