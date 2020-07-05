import { Test, TestingModule } from '@nestjs/testing';
import { JokeService, JOKE_URL_BASE, JOKE_URL_ENDPOINT } from './joke.service';
import { HttpModule } from '@nestjs/common';
const nock = require('nock');

describe('JokeService', () => {
  let service: JokeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [JokeService],
    }).compile();

    service = module.get<JokeService>(JokeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an observable of whatever the jokes endpoint returns', (done) => {

    const fakeJoke = {
      something: 'stuff'
    }

    const scope = nock(JOKE_URL_BASE)
      .get(JOKE_URL_ENDPOINT)
      .reply(200, fakeJoke)

    service.getJoke().subscribe(joke => {

      expect(joke).toStrictEqual(fakeJoke)

      done()

    })

  })
  
  it('should throw an error if the endpoint fails', (done) => {

    const fakeError = {
      message: 'oh no!'
    }

    const scope = nock(JOKE_URL_BASE)
      .get(JOKE_URL_ENDPOINT)
      .reply(404, fakeError)

    service.getJoke().subscribe(jest.fn(), err => {

      expect(err.response.data).toEqual(fakeError)

      scope.done()

      done()

    })

  })

});
