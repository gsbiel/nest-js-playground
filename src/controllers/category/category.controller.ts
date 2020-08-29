import {Controller, Get, Post, Body, Query, HttpException, HttpService, HttpStatus} from '@nestjs/common';
import {CategoryService} from '../../services/categories/categories.service';
import {CreateCategoryDto} from '../../dto/category.dto';

// Create an endpoint: /category
@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    // StatusCode: 201 by default
    @Post()
    createCategory(@Body() createCategoryDto: CreateCategoryDto):string{
        if(createCategoryDto.name){
            return this.categoryService.createCategory(createCategoryDto) 
        }
        throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            error: `Parâmetro "name" não encontrado no corpo da requisição.`
        }, HttpStatus.BAD_REQUEST);
    }

    @Get()
    getCategories(@Query('name') name, @Query('id') id):string{
        return this.categoryService.getCategories(name, id);
    }

}
