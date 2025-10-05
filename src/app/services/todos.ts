import { Injectable, inject } from '@angular/core';
import { TodoModel } from '../Model/todoModel.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Todos {

  http = inject(HttpClient);
  
 url = 'https://jsonplaceholder.typicode.com/todos';
  getTodosFromApi(){

   return  this.http.get<Array<TodoModel>>(this.url);
    


  }


}
