// actions/todoActions.ts

import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction<string>('ADD_TODO');
export const toggleTodo = createAction<string>('TOGGLE_TODO');
export const deleteTodo = createAction<string>('DELETE_TODO');
