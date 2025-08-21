import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import type { App } from 'supertest/types';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('should get all countries', () => {
    return request(app.getHttpServer()).get('/countries').expect(200);
  });

  it('should get country info', () => {
    return request(app.getHttpServer()).get('/countries/UA').expect(200);
  });

  it('should throw on wrong country code', () => {
    return request(app.getHttpServer()).get('/countries/U').expect(404);
  });
});
