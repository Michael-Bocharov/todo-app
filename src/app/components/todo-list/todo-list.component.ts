import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: object[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        'id': 1,
        'title': 'task1',
        'completed': false,
        'editing': false


      },
      {
        'id': 2,
        'title': 'task2',
        'completed': false,
        'editing': false


      },
      {
        'id': 3,
        'title': 'task3',
        'completed': false,
        'editing': false
      }

    ];

  }
}
