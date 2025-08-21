import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetAllCountriesResponseDto } from './dto/get-all-countries-response.dto';
import { GetCountryInfoResponseDto } from './dto/get-country-info-response.dto';
import { GetCountryByCodeParamDto } from './dto/get-country-by-code-param.dto';

@Controller({ path: 'countries', version: '1' })
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get(':countryCode')
  @ApiOperation({ summary: 'Get info about country by country code' })
  @ApiResponse({
    status: 200,
    type: GetCountryInfoResponseDto,
  })
  public async getCountryInfo(
    @Param() { countryCode }: GetCountryByCodeParamDto,
  ): Promise<GetCountryInfoResponseDto> {
    return this.countriesService.getCountryInfo(countryCode);
  }

  @Get()
  @ApiOperation({ summary: 'Get all available countries' })
  @ApiResponse({
    status: 200,
    type: GetAllCountriesResponseDto,
  })
  public async getAvailableCountries(): Promise<GetAllCountriesResponseDto> {
    return this.countriesService.getAvailableCountries();
  }
}
