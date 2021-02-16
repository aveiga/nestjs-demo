import { Module } from '@nestjs/common';
import { ClientServerController } from './client-server.controller';
import { ClientServerService } from './client-server.service';

@Module({
  imports: [],
  controllers: [ClientServerController],
  providers: [ClientServerService],
})
export class ClientServerModule {}
