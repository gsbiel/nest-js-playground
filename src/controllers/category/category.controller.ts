import { Controller, Get, Req, Post, Param, Body, Query } from '@nestjs/common';
import {CategoryService} from '../../services/categories/categories.service'

// Create an endpoint: /category
@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    // StatusCode: 201 by default
    @Post()
    createCategory(@Body() createCategoryDto: string):string{
        return this.categoryService.createCategory()
    }

    @Get()
    getCategories(@Query('name') name, @Query('id') id):string{
        return this.categoryService.getCategories(name, id);
    }

}
