import { Test, TestingModule } from '@nestjs/testing';
import { ClientServerController } from './client-server.controller';
import { ClientServerService } from './client-server.service';

describe('ClientServerController', () => {
  let clientServerController: ClientServerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClientServerController],
      providers: [ClientServerService],
    }).compile();

    clientServerController = app.get<ClientServerController>(ClientServerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(clientServerController.getHello()).toBe('Hello World!');
    });
  });
});
