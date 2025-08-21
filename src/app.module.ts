import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [ConfigModule, CountriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
