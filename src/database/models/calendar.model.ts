import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';
import { UserModel } from './user.model';
import { EventModel } from './event.model';

export interface CalendarCreationAttributes {
  userId: string;
  calendarName: string;
}

export class CalendarModel extends Model<
  CalendarModel,
  CalendarCreationAttributes
> {
  @PrimaryKey
  @Column
  calendarId!: string;

  @AllowNull(false)
  @Column
  calendarName!: string;

  @AllowNull(false)
  @ForeignKey(() => UserModel)
  @Column
  userId!: string;

  @HasMany(() => EventModel)
  events!: EventModel[];

  @BelongsTo(() => UserModel)
  user!: UserModel;
}
