import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { EventRepository } from './event.repository';
import { AxiosModule } from '../axios/axios.module';
import { CalendarRepository } from './calendar.repository';
import { UserRepository } from './user.repository';

@Module({
  imports: [AxiosModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    EventRepository,
    CalendarRepository,
    UserRepository,
  ],
})
export class UsersModule {}
