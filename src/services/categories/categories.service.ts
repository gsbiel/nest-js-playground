import { Injectable} from '@nestjs/common';
import {Repository, Connection, Entity} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {CreateCategoryDto} from '../../dto/category.dto';
import { Category } from 'src/entities/category.entity';
import { connect } from 'http2';

@Injectable()
export class CategoryService {
    constructor(
       @InjectRepository(Category)
       private readonly categoriesRepository: Repository<Category>,
       private connection: Connection
    ){}

    async createCategory(categoryDto: CreateCategoryDto){
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const entity = new Category()
            entity.name = categoryDto.name
            await queryRunner.manager.save(entity);
            await queryRunner.commitTransaction();
            console.log("Transação feita com sucesso!")
        } catch (err) {
            console.log("Erro na transação! rollback...")
            console.log(err)
            // since we have errors lets rollback the changes we made
            await queryRunner.rollbackTransaction();
        } finally {
            // you need to release a queryRunner which was manually instantiated
            await queryRunner.release();
        }
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

    findAllCategories(): Promise<Category[]> {
        return this.categoriesRepository.find();
    }
}