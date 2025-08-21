import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import {
  CountryDto,
  GetAllCountriesResponseDto,
} from './dto/get-all-countries-response.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { EnvParams } from '../shared/enums';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CountriesService {
  private readonly logger = new Logger(ConfigService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  public async getAvailableCountries(): Promise<GetAllCountriesResponseDto> {
    try {
      const apiUrl = this.config.getOrThrow<string>(EnvParams.DATE_NAGER_URL);

      const response = this.httpService.get<CountryDto[]>(
        `${apiUrl}/AvailableCountries`,
      );
      const countriesData = await lastValueFrom(response);

      return { countries: countriesData.data };
    } catch (error) {
      this.logger.error(`axios: ${error}`);
      throw new InternalServerErrorException();
    }
  }
}
