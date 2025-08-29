import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // console.log(action)
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      // console.log(action);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id); 
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
