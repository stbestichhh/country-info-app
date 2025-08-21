import { ApiProperty } from '@nestjs/swagger';

export class CreateCalendarResponseDto {
  @ApiProperty({ example: 'calendar-123' })
  calendarId!: string;

  @ApiProperty({ example: 'Holidays' })
  calendarName!: string;
}
