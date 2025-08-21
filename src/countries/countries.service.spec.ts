import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { CountriesService } from './countries.service';
import { ConfigModule } from '../config/config.module';
import { AxiosModule } from '../axios/axios.module';

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AxiosModule, ConfigModule],
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

  it('should return country info', async () => {
    const data = await service.getCountryInfo('UA');

    expect(data.commonName).toBe('Ukraine');
    expect(data.borders.length).toBeGreaterThan(1);
    expect(data.population.length).toBeGreaterThan(1);
  });
});
