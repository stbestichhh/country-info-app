import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetCountryByCodeParamDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'UA' })
  countryCode!: string;
}
