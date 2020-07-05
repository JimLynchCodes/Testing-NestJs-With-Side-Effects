import { Test, TestingModule } from '@nestjs/testing';
import { JokeController } from './joke.controller';
import { JokeService } from '../services/joke.service';
import { of, Observable } from 'rxjs';

describe('Joke Controller', () => {
  let controller: JokeController;
  let jokeService: JokeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JokeController],
      providers: [
        { provide: JokeService, useValue: { getJoke: jest.fn() } }
      ]
    }).compile();

    controller = module.get<JokeController>(JokeController);
    jokeService = module.get<JokeService>(JokeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call joke service', async () => {

    
    const fakeResponse = {
      data: 'ok',
      status: 200,
      statusText: 'foo',
      headers: {},
      config: {}
    }
    
    const expectedResult: Observable<any> = of(fakeResponse)

    jest.spyOn(jokeService, 'getJoke').mockReturnValue(of(fakeResponse))

    const result = await controller.joke().toPromise()

    expectedResult.subscribe( val => {
      expect(result).toBe(val)
    })

  })

});
