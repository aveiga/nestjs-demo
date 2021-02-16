import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientServerService {
  getHello(): string {
    return 'Hello World!';
  }
}
