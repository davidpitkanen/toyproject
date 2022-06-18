import { createReducer, on } from '@ngrx/store';
import { addItem, deleteItem } from './todo-items.actions';
import dataList from '../services/todo-item-data';

export const initialState = dataList;

export const todoListReducer = createReducer(
    initialState,
    on(addItem, (state, { item }) => [ ...state, item ]
    ),
    on(deleteItem, (state, { id }) => { 
        const newState = state.filter(_ => _.id !== id);
        return newState;
    })
)