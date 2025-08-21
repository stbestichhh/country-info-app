import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '../config/config.module';

describe('CountriesController', () => {
  let controller: CountriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      controllers: [CountriesController],
      providers: [CountriesService],
    }).compile();

    controller = module.get<CountriesController>(CountriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all countries', async () => {
    const data = await controller.getAvailableCountries();
    expect(data).toHaveProperty('countries');
    expect(data.countries.length).toBeGreaterThan(1);
  });
});
