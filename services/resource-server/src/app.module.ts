import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import {
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
  AuthGuard,
} from 'nest-keycloak-connect';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuitarModule } from './guitars/guitar.module';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8080/auth',
      realm: 'master',
      clientId: 'my-nestjs-app',
      secret: 'secret',
      // optional if you want to retrieve JWT from cookie
      cookieKey: 'KEYCLOAK_JWT',
    }),
    GuitarModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    AppService,
  ],
})
export class AppModule {}
