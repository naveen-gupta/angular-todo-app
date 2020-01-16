import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "";
  doneTodos=[1];
  todos = [{id: 1, value: "todo one", isDone: false}, {id: 2, value: "todo two", isDone: false}];
  deleteTodoItem(id){
    this.todos = this.todos.filter(t => t.id !== id);
  }
  addTodoItem(){
    this.todos.push({id: this.todos.length + 1, value: this.title, isDone: false});
  }
  changeStatus(id){
    doneTodos.push(id);
  }
}
