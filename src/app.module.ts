import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm';
import {Category} from './entities/category.entity';
import { AppController } from './controllers/app/app.controller';
import { AppService } from './services/app/app.service';
import {CategoryController}  from './controllers/category/category.controller';
import {CategoryService} from './services/categories/categories.service'

import {CategoryModule} from './category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '../database.sql',
      entities: [Category],
      synchronize: true,
    }),
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private connection: Connection) {}
}
