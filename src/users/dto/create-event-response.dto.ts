import { ApiProperty } from '@nestjs/swagger';

export class EventDto {
  @ApiProperty({ example: '2025-01-01', type: String })
  date!: Date;

  @ApiProperty({ example: 'New Year' })
  localName!: string;

  @ApiProperty({ example: 'New Year' })
  name!: string;

  @ApiProperty({ example: 'UA' })
  countryCode!: string;

  @ApiProperty({ example: true })
  global!: boolean;

  @ApiProperty({ example: null, nullable: true })
  launchYear?: number;
}

export class CreateEventResponseDto {
  @ApiProperty({ type: [EventDto] })
  events!: EventDto[];
}
