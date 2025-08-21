import { ForbiddenException, Injectable } from '@nestjs/common';
import {
  CreateEventResponseDto,
  EventDto,
} from './dto/create-event-response.dto';
import { CreateEventBodyDto } from './dto/create-event-body.dto';
import { ConfigService } from '@nestjs/config';
import { EventRepository } from './event.repository';
import { EnvParams } from '../shared/enums';
import { AxiosService } from '../axios/axios.service';
import { CreateCalendarBodyDto } from './dto/create-calendar-body.dto';
import { CalendarRepository } from './calendar.repository';
import { CreateCalendarResponseDto } from './dto/create-calendar-response.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly config: ConfigService,
    private readonly eventRepository: EventRepository,
    private readonly calendarRepository: CalendarRepository,
    private readonly axiosService: AxiosService,
  ) {}

  public async addEventToCalendar(
    userId: string,
    bodyDto: CreateEventBodyDto,
  ): Promise<CreateEventResponseDto> {
    const calendar = await this.calendarRepository.findOne({
      calendarId: bodyDto.calendarId,
      userId: userId,
    });

    if (!calendar) {
      throw new ForbiddenException('User do not has access to this calendar');
    }

    const dateNagerUrl = this.config.getOrThrow<string>(
      EnvParams.DATE_NAGER_URL,
    );

    const data = await this.axiosService.get<EventDto[]>(
      `${dateNagerUrl}/PublicHolidays/${bodyDto.year}/${bodyDto.countryCode}`,
    );

    let selectedEvents = data;
    if (bodyDto.holidays?.length) {
      selectedEvents = data.filter((event: EventDto) =>
        bodyDto.holidays.includes(event.name),
      );
    }

    const savedEvents = await this.eventRepository.saveEvents(
      selectedEvents,
      bodyDto.calendarId,
    );

    return { events: savedEvents };
  }

  public async createCalendar(
    userId: string,
    bodyDto: CreateCalendarBodyDto,
  ): Promise<CreateCalendarResponseDto> {
    return this.calendarRepository.insert({
      userId,
      calendarName: bodyDto.calendarName,
    });
  }
}
