import { Controller, Get, Req, Post, Param, Body, Query } from '@nestjs/common';
import { Request } from 'express';

// Create an endpoint: /category
@Controller('category')
export class CategoryController {

    // StatusCode: 201 by default
    @Post()
    createCategory(@Body() createCategoryDto: string):string{
        return "<h1>A new category has been created</h1>"
    }

    // Create a GET handler over the "/category" endpoint
    // @Get("description") would create a GET handler over the "/category/description" endpoint
    // StatusCode: 200 by default
    @Get()
    getAllCategories(@Req() request: Request, @Query('name') name:string):string{
        if(name){
            return `<h1>All categories has been returned for querry=${name}.</h1>`
        }else{
            return "<h1>All categories has been returned.</h1>"
        }
    }

    // http://localhost:3003/category/5/gaspar
    @Get(':id/:name')
    getCategoryById(
        @Param('id') id:string, 
        @Param('name') name:string):string
    {
        return `<h1>Category(id=${id} and name=${name}) has been returned.</h1>`
    }   

    // @Get('search')
    // getCategoryByName(@Param('name') name:string):string{
    //     return `<h1>Category(name= ${name}) has been returned.</h1>`
    // }
    
}
