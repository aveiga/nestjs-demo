// import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import * as request from 'supertest';
// import { ClientServerModule } from '../src/ClientServer.module';

// describe('ClientServerController (e2e)', () => {
//   let app: INestApplication;

//   beforeEach(async () => {
//     const moduleFixture: TestingModule = await Test.createTestingModule({
//       imports: [ClientServerModule],
//     }).compile();

//     app = moduleFixture.createNestApplication();
//     await app.init();
//   });

//   it('/ (GET)', () => {
//     return request(app.getHttpServer())
//       .get('/')
//       .expect(200)
//       .expect('Hello World!');
//   });
// });
