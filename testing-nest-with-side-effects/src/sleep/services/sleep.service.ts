import { Injectable } from '@nestjs/common';

@Injectable()
export class SleepService {
   
    sleep() {
        
        setTimeout(() => {
            return 'Awake!'
        }, 3000)
        
    }
    
}