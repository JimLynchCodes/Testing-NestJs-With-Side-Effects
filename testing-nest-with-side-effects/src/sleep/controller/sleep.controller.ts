import { Controller, Get } from '@nestjs/common';
import { SleepService } from '../services/sleep.service';

@Controller('sleep')
export class SleepController {

    constructor(private readonly servicesService: SleepService) {}

    @Get()
    getHello(): string {
    //   return this.servicesService.sleep();
    return 'foo'
    }

}

