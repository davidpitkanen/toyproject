import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import TodoItem from './classes/todo-item';
import dataList from './services/todo-item-data';
import { addItem, deleteItem } from './state/todo-items.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'toyproject';
  public checked = true;
  public email = 'todo 1';
  public todoItems = dataList;
  public counter = dataList.length;
  public todoItems$: Observable<TodoItem[]>;

  constructor(private _snackBar: MatSnackBar, private store: Store<{ todoItem: TodoItem[] }>) {
    this.todoItems$ = this.store.select('todoItem');
    this.todoItems$.subscribe(_ => console.log(_));
  }

  public addToDoItem(): void {
    const newItem = { name: this.email, isDone: this.checked, id: this.counter } as TodoItem;
    this.store.dispatch(addItem({ item: newItem} ));
    this.counter++;
    this.email = "";
    this.checked = false;
    this._snackBar.open('todo item added!', 'ok')
  }

  public pop(): void {
    this.store.dispatch(deleteItem( { id: this.counter - 1 } ));
    this.counter--;
  }
}
