import { Controller, Get } from '@nestjs/common';
import { ClientServerService } from './client-server.service';

@Controller()
export class ClientServerController {
  constructor(private readonly clientServerService: ClientServerService) {}

  @Get()
  getHello(): string {
    return this.clientServerService.getHello();
  }
}
