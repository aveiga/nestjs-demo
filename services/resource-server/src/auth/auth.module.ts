import { HttpModule, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ScopesGuard } from './scopes.guard';

@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ScopesGuard,
    },
    AuthService,
  ],
  exports: [],
})
export class AuthModule {}
