import { ApiProperty } from '@nestjs/swagger';

export class CountryDto {
  @ApiProperty({ example: 'AD' })
  countryCode!: string;

  @ApiProperty({ example: 'Andorra' })
  name!: string;
}

export class GetAllCountriesResponseDto {
  @ApiProperty({ type: [CountryDto] })
  countries!: CountryDto[];
}
