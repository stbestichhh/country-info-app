import {
  AllowNull,
  BelongsTo,
  Column,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';
import { CalendarModel } from './calendar.model';

export interface EventCreationAttributes {
  calendarId: string;
  date: Date;
  localName: string;
  name: string;
  countryCode: string;
  global: boolean;
  launchYear?: number;
}

export class EventModel extends Model<EventModel, EventCreationAttributes> {
  @PrimaryKey
  @Column
  eventId!: string;

  @AllowNull(false)
  @ForeignKey(() => CalendarModel)
  @Column
  calendarId!: string;

  @AllowNull(false)
  @Column
  date!: Date;

  @AllowNull(false)
  @Column
  localName!: string;

  @AllowNull(false)
  @Column
  name!: string;

  @AllowNull(false)
  @Column
  countryCode!: string;

  @AllowNull
  @Default(false)
  @Column
  launchYear?: number;

  @AllowNull(false)
  @Column
  global!: boolean;

  @BelongsTo(() => CalendarModel)
  calendar!: CalendarModel[];
}
