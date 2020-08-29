import { Controller, Get, Post, Body, Query, Param, Req } from '@nestjs/common';
import { AppService } from '../../services/app/app.service';
import { Request } from 'express';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // StatusCode: 201 by default
  @Post()
  createCategory(@Body() createCategoryDto: string):string{
      return "<h1>A new category has been created</h1>"
  }

  // Create a GET handler over the "/app" endpoint
  // @Get("description") would create a GET handler over the "/app/description" endpoint
  // http://localhost:3003/app?name=gaspar
  // http://localhost:3003/app
  // StatusCode: 200 by default
  @Get()
  getAllCategories(@Req() request: Request, @Query('name') name:string):string{
      if(name){
          return `<h1>All categories has been returned for querry=${name}.</h1>`
      }else{
          return "<h1>All categories has been returned.</h1>"
      }
  }

  // http://localhost:3003/app/5/gaspar
  @Get(':id/:name')
  getCategoryById(
      @Param('id') id:string, 
      @Param('name') name:string):string
  {
      return `<h1>Category(id=${id} and name=${name}) has been returned.</h1>`
  }   


}
