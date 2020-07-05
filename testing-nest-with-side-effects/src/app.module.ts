import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SleepController } from './sleep/controller/sleep.controller';
import { SleepService } from './sleep/services/sleep.service';
import { JokeController } from './joke/controller/joke.controller';
import { UsersController } from './users/controller/users.controller';
import { JokeService } from './joke/services/joke.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, SleepController, JokeController, UsersController],
  providers: [AppService, SleepService, JokeService],
})
export class AppModule {}
