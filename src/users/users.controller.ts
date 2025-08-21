import { Body, Controller, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateEventResponseDto } from './dto/create-event-response.dto';
import { GetUserByIdParamDto } from './dto/get-user-by-id-param.dto';
import { CreateEventBodyDto } from './dto/create-event-body.dto';
import { CreateCalendarResponseDto } from './dto/create-calendar-response.dto';
import { CreateCalendarBodyDto } from './dto/create-calendar-body.dto';
import { CreateUserResponseDto } from './dto/create-user-response.dto';
import { CreateUserBodyDto } from './dto/create-user-body.dto';

@Controller({ path: 'users', version: '1' })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Add new user' })
  @ApiResponse({
    status: 200,
    type: CreateUserResponseDto,
  })
  public async createNewUser(
    @Body() bodyDto: CreateUserBodyDto,
  ): Promise<CreateUserResponseDto> {
    return this.usersService.createUser(bodyDto);
  }

  @Post(':userId/calendar/holidays')
  @ApiOperation({ summary: 'Add event to users calendar' })
  @ApiResponse({
    status: 200,
    type: CreateEventResponseDto,
  })
  public async addEventToCalendar(
    @Param() { userId }: GetUserByIdParamDto,
    @Body() bodyDto: CreateEventBodyDto,
  ): Promise<CreateEventResponseDto> {
    return this.usersService.addEventToCalendar(userId, bodyDto);
  }

  @Post(':userId/calendar')
  @ApiOperation({ summary: 'Create new calendar fro user' })
  @ApiResponse({
    status: 200,
    type: CreateCalendarResponseDto,
  })
  public async createCalendar(
    @Param() { userId }: GetUserByIdParamDto,
    @Body() bodyDto: CreateCalendarBodyDto,
  ): Promise<CreateCalendarResponseDto> {
    return this.usersService.createCalendar(userId, bodyDto);
  }
}
