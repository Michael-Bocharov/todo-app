import { Component, OnInit } from '@angular/core';
import {TodoDataService} from "../../services/todo-data.service";
import {Todo} from "../../todo";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoDataService]
})
export class TodoListComponent implements OnInit {
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService){

  }

  addTodo(){
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo=new Todo();
  }

  toggleTodoComplete(todo){
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(id){
    this.todoDataService.deleteTodoById(id);
  }

  get todos(){
    return this.todoDataService.getAllTodod();
  }

  ngOnInit(): void {
  }

}
