import { Controller, Get } from '@nestjs/common';
import { SleepService } from '../services/sleep.service';

const FIVE_SECONDS = 5000

@Controller('sleep')
export class SleepController {

    constructor(private readonly servicesService: SleepService) { }

    @Get()
    sleep(): Promise<string> {

        return new Promise( resolve => {
    
            setTimeout(() => {
                
                resolve('Awake!')

            }, FIVE_SECONDS)
        
        })

    }

}

