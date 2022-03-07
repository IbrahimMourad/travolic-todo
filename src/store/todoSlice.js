import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
const todos = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: todos,
    selected: {},
  },
  reducers: {
    // Add Reducer
    addTodo: (state, { payload }) => {
      state.todos.push({
        description: payload.description,
        title: payload.title,
        date: payload.date,
        priority: payload.priority,
        status: payload.status,
        assignedUser: payload.assignedUser,

        id: v4(),
      });
    },

    // Delete Reducer
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    },

    // Edit Reducer
    selectTodo: (state, { payload }) => {
      state.selected = state.todos.find((el) => el.id === payload.id);
    },
    editTodo: (state, { payload }) => {
      state.todos = state.todos.map((el) =>
        el.id === payload.id ? payload : el
      );
      state.selected = {};
    },

    filterTodo: (state, { payload: { filterType } }) => {
      switch (filterType) {
        case 'status':
          state.todos = state.todos.sort((a, b) => a.status - b.status);
          break;
        case 'priority':
          state.todos = state.todos.sort((a, b) => b.priority - a.priority);
          break;
        default:
          state.todos = state.todos.sort(
            (a, b) => a.date.timestamp - b.date.timestamp
          );
          break;
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, editTodo, selectTodo, filterTodo } =
  todoSlice.actions;
