import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: ['씻기'],
};

const todoSlice = createSlice({
  name: 'Todos',
  initialState,
  reducers: {
    add(state, action) {
      const newtodo = action.payload;
      state.todos.push(newtodo);
    },
    deletetodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo !== action.payload);
      state.todos = newTodos;
    },
    update: (state, action) => {
      const { idx, content } = action.payload;
      state.todos[idx] = content;
    },
  },
});

export const { add, deletetodo, update } = todoSlice.actions;
export default todoSlice.reducer;
