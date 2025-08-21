import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';
import { EnvParams } from '../shared/enums';
import { ConfigModule } from '../config/config.module';
import { UserModel } from './models/user.model';
import { EventModel } from './models/event.model';
import { CalendarModel } from './models/calendar.model';

@Global()
@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        dialect: 'postgres',
        host: config.get(EnvParams.POSTGRES_HOST),
        port: config.get(EnvParams.POSTGRES_PORT),
        username: config.get(EnvParams.POSTGRES_USER),
        password: config.get(EnvParams.POSTGRES_PASSWORD),
        database: config.get(EnvParams.POSTGRES_DB),
        autoLoadModels: true,
        models: [UserModel, EventModel, CalendarModel],
      }),
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    SequelizeModule.forFeature([UserModel, EventModel, CalendarModel]),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
