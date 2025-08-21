import {
  AllowNull,
  Column,
  HasOne,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { CalendarModel } from './calendar.model';

export interface UserCreationAttributes {
  email: string;
  username: string;
}

@Table({ tableName: 'users' })
export class UserModel extends Model<UserModel, UserCreationAttributes> {
  @PrimaryKey
  @Column
  userId!: string;

  @AllowNull(false)
  @Column
  username!: string;

  @Unique
  @AllowNull(false)
  @Column
  email!: string;

  @HasOne(() => CalendarModel)
  calendar!: CalendarModel;
}
