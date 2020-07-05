import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

export const JOKE_URL_BASE = 'https://sv443.net'
export const JOKE_URL_ENDPOINT = '/jokeapi/v2/joke/Programming'

@Injectable()
export class JokeService {
    
    constructor(private readonly httpService: HttpService) {}

    getJoke() {

        return this.httpService.get(`${JOKE_URL_BASE}${JOKE_URL_ENDPOINT}`)
            .pipe(map(response => response.data))

    }

}
