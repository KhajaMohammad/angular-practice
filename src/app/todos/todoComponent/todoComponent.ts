import { Component, inject , OnInit, signal    } from '@angular/core';
import { Todos } from '../../services/todos';
import { TodoModel } from '../../Model/todoModel.type';
import { catchError } from 'rxjs';
import {TodosItem} from '../../components/todosItem/todosItem';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../../pipes/filter-todos-pipe';
@Component({
  selector: 'app-todo',
  imports: [TodosItem,FormsModule,FilterTodosPipe],
  templateUrl: './todoComponent.html',
  styleUrl: './todoComponent.scss'
})
export class Todo implements OnInit {
todoItemList = signal<Array<TodoModel>>([]);
  todoService = inject(Todos);
searchTerm = signal('');

  updateTodoItem(TodoItem : TodoModel){

this.todoItemList.update((todos) =>
  todos.map((todo) =>
    todo.id === TodoItem.id
      ? { ...todo, completed: !todo.completed }
      : todo
  )
);

  }
  

  ngOnInit(): void {
      this.todoService.getTodosFromApi()
      .pipe(
        catchError((error) => {
          console.error('Error fetching todos:', error);
          throw error;
        })
      )
      .subscribe((data: Array<TodoModel>) => {
        this.todoItemList.set(data);
      }); 
  }

}
