import { Test, TestingModule } from '@nestjs/testing';
import { SleepController } from './sleep.controller';
import { SleepService } from '../services/sleep.service';

describe('Sleep Controller', () => {
  let controller: SleepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SleepController],
      providers: [SleepService]
    }).compile();

    controller = module.get<SleepController>(SleepController)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should sleep for 5 seconds and then return "Awake!"', async () => {

    jest.useFakeTimers()

    const expectedResponse = 'Awake!'

    const pendingPromise = controller.sleep()
      .then(resolved => {
        expect(resolved).toBe(expectedResponse)
      })
    
    jest.runAllTimers()

    return pendingPromise
    
  })

})
