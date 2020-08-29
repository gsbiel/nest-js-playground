import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {

  createCategory(): string {
    return "<h1>A new category has been created</h1>";
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
}