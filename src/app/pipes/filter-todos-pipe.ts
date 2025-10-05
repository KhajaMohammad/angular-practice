import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../Model/todoModel.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: TodoModel[], searchTerm:string): TodoModel[] {
    
    if(!searchTerm){
return todos;

    }


    const text = searchTerm.toLowerCase();


    
    return todos.filter(todo=>{
      return todo.title.toLowerCase().includes(text)      


    })
  }

}
