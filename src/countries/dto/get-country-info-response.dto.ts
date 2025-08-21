import { ApiProperty } from '@nestjs/swagger';

export class PopulationDto {
  @ApiProperty({ example: 1960 })
  year!: number;

  @ApiProperty({ example: 94724510 })
  value!: number;
}

export class CountryInfoDto {
  @ApiProperty({ example: 'Romania' })
  commonName!: string;

  @ApiProperty({ example: 'Romania' })
  officialName!: string;

  @ApiProperty({ example: 'Europe' })
  region!: string;

  @ApiProperty({ type: [CountryInfoDto] })
  borders!: CountryInfoDto[];
}

export class GetCountryInfoResponseDto extends CountryInfoDto {
  @ApiProperty({ type: [PopulationDto] })
  population!: PopulationDto[];

  @ApiProperty({ example: 'https://image.url' })
  flagUrl!: string;
}
