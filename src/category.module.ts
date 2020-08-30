
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CategoryService} from './services/categories/categories.service';
import {CategoryController} from './controllers/category/category.controller';
import {Category} from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: '../database.sql',
    entities: [Category],
    synchronize: true,
  })],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}