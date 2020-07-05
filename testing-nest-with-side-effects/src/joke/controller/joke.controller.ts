import { Controller, Get } from '@nestjs/common';
import { JokeService } from '../services/joke.service';
import { Observable } from 'rxjs';

@Controller('joke')
export class JokeController {

    constructor(private readonly jokeService: JokeService) {}

    @Get()
    joke(): Observable<any> {
        return this.jokeService.getJoke()
    }

}
