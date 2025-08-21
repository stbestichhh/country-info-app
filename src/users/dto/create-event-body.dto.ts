import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';

export class CreateEventBodyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'calendar-123' })
  calendarId!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'UA' })
  countryCode!: string;

  @IsNumber()
  @IsPositive()
  @Transform(({ value }: TransformFnParams) => Number(value))
  @ApiProperty({ example: 2025 })
  year!: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @ApiProperty({ example: ["New Year's Day", 'Independence Day'] })
  holidays!: string[];
}
