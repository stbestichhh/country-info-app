import { Injectable, Logger } from '@nestjs/common';
import {
  CountryDto,
  GetAllCountriesResponseDto,
} from './dto/get-all-countries-response.dto';
import { ConfigService } from '@nestjs/config';
import { EnvParams } from '../shared/enums';
import {
  CountryInfoDto,
  GetCountryInfoResponseDto,
} from './dto/get-country-info-response.dto';
import { AxiosService } from '../axios/axios.service';
import { PopulationAxiosResponse, FlagAxiosResponse } from '../shared/types';

@Injectable()
export class CountriesService {
  private readonly logger = new Logger(ConfigService.name);
  private readonly dateNagerUrl: string;
  private readonly countriesNowUrl: string;

  constructor(
    private readonly axiosService: AxiosService,
    private readonly config: ConfigService,
  ) {
    this.dateNagerUrl = config.getOrThrow<string>(EnvParams.DATE_NAGER_URL);
    this.countriesNowUrl = config.getOrThrow<string>(
      EnvParams.COUNTRIESNOW_URL,
    );
  }

  public async getCountryInfo(
    countryCode: string,
  ): Promise<GetCountryInfoResponseDto> {
    const { officialName, commonName, region, borders } =
      await this.axiosService.get<CountryInfoDto>(
        `${this.dateNagerUrl}/CountryInfo/${countryCode}`,
      );

    const populationData =
      await this.axiosService.post<PopulationAxiosResponse>(
        `${this.countriesNowUrl}/countries/population`,
        { country: commonName },
      );

    const flagUrl = await this.axiosService.post<FlagAxiosResponse>(
      `${this.countriesNowUrl}/countries/flag/images`,
      { country: commonName },
    );

    return {
      commonName,
      officialName,
      region,
      flagUrl: flagUrl.data.flag,
      borders,
      population: populationData.data.populationCounts,
    };
  }

  public async getAvailableCountries(): Promise<GetAllCountriesResponseDto> {
    const countries = await this.axiosService.get<CountryDto[]>(
      `${this.dateNagerUrl}/AvailableCountries`,
    );

    return { countries };
  }
}
