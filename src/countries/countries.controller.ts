import { Controller, Get } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetAllCountriesResponseDto } from './dto/get-all-countries-response.dto';

@Controller({ path: 'countries', version: '1' })
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

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
