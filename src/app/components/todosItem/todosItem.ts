import { Component, input , output   } from '@angular/core';
import  {TodoModel} from '../../Model/todoModel.type';
import { HighlightCompleteTodo } from '../../directives/highlight-complete-todo';
@Component({
  selector: 'app-TodosItem',
  imports: [HighlightCompleteTodo],
  templateUrl: './todosItem.html',
  styleUrl: './todosItem.scss'
})
export class TodosItem {

  todo = input.required<TodoModel>();
todoToggled = output<TodoModel>();

todoClicked() {
  this.todoToggled.emit(this.todo());
}

}
