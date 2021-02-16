import { NestFactory } from '@nestjs/core';
import { ClientServerModule } from './client-server.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientServerModule);
  await app.listen(3000);
}
bootstrap();
