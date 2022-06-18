import { createAction, props } from '@ngrx/store';
import TodoItem from '../classes/todo-item';

export const addItem = createAction('[ Todo Collection ] AddItem',
    props<{ item: TodoItem }>());
export const deleteItem = createAction('[ Todo Collection ] PopItem',
    props<{ id: number }>()
);

