import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService , private readonly configService : ConfigService) {}

  @Get('hello')
  getHello(): string {
    console.log('Port de le App' ,this.configService.get('APP_PORT'));
    return "Hello"
    
  }


}
