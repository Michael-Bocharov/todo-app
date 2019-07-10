import { Injectable } from '@angular/core';
import {Todo} from "../todo";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId: number = 0;
  todos: Array<Todo> = [];

  constructor() { }

  addTodo(todo: Todo): TodoDataService {
    if(!todo.id){
      todo.id= ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: number): TodoDataService{
    this.todos = this.todos.filter(todo=> todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values : {}): Todo {
    let todo = this.getTodoById(id);
    if(!todo){
      return null;
    }
    Object.assign(todo,values);
    return todo;
  }

  getAllTodod(): Array<Todo>{
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.filter((item) => item.id == id ).pop();
  }

  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
