

import { createReducer} from '@reduxjs/toolkit';
import { addTodo, toggleTodo, deleteTodo } from '../actions/todoActions';
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoReducer:any = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      const newTodo: Todo = {
        id:  uuidv4(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    })
    .addCase(toggleTodo, (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    })
    .addCase(deleteTodo, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    });
});
