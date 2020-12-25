import { Controller, Get,Param } from '@nestjs/common';


import { AppService } from './app.service';

@Controller('course')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getData() {
    return this.appService.getData();
  }

  
  @Get(':id')
  search(@Param('id') id: number) {
    return this.appService.search(id);
  }

}
