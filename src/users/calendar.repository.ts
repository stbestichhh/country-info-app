import { AbstractRepository } from 'nest-sequelize-repository';
import { CalendarModel } from '../database/models/calendar.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CalendarRepository extends AbstractRepository<CalendarModel> {
  constructor(
    @InjectModel(CalendarModel) private readonly model: typeof CalendarModel,
  ) {
    super(model, {
      idField: 'calendarId',
      autoGenerateId: true,
    });
  }
}
