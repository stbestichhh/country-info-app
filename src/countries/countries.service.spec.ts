import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { CountriesService } from './countries.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '../config/config.module';

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      providers: [CountriesService],
    }).compile();

    service = module.get<CountriesService>(CountriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all available countries', async () => {
    const data = await service.getAvailableCountries();

    expect(data).toHaveProperty('countries');
    expect(data.countries.length).toBeGreaterThan(0);
  });
});
