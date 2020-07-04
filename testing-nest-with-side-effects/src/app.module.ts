import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SleepController } from './sleep/controller/sleep.controller';
import { SleepService } from './sleep/services/sleep.service';

@Module({
  imports: [],
  controllers: [AppController, SleepController],
  providers: [AppService, SleepService],
})
export class AppModule {}
