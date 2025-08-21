import { AbstractRepository } from 'nest-sequelize-repository';
import { EventModel } from '../database/models/event.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EventDto } from './dto/create-event-response.dto';
import { v7 } from 'uuid';

@Injectable()
export class EventRepository extends AbstractRepository<EventModel> {
  constructor(
    @InjectModel(EventModel) private readonly model: typeof EventModel,
  ) {
    super(model, {
      autoGenerateId: true,
      idField: 'eventId',
    });
  }

  public async saveEvents(
    selectedEvents: EventDto[],
    calendarId: string,
  ): Promise<EventModel[]> {
    const mappedEvents = selectedEvents.map((event: EventDto) => ({
      ...event,
      eventId: v7(),
      calendarId,
    }));

    return this.insertMany(mappedEvents);
  }
}
