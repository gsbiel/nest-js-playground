import { Module } from '@nestjs/common';
import { AppController } from './controllers/app/app.controller';
import { AppService } from './services/app/app.service';
import {CategoryService} from './services/categories/categories.service';
import { CategoryController } from './controllers/category/category.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoryController],
  providers: [AppService, CategoryService],
})
export class AppModule {}
