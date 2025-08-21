import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCalendarBodyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Holidays' })
  calendarName!: string;
}
