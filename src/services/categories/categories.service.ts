import { Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {CreateCategoryDto} from '../../dto/category.dto';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoryService {
    constructor(
       @InjectRepository(Category)
       private readonly categoriesRepository: Repository<Category>
    ){}

    createCategory(categoryDto: CreateCategoryDto): string {
        return `<h1>A new category, named ${categoryDto.name}, has been created</h1>`;
    }

    getCategories(name, id):string {
        if(name || id){
            return id ? 
                        `<h1> Category with id=${id} has been returned.</h1>` :
                        `<h1> Category with name=${name} has been returned.</h1>`
        }
        else{
            return "<h1>All categories have been returned.</h1>"
        }
    }

    async findAllUser(): Promise<Category[]> {
        return await this.categoriesRepository.find();
    }
}