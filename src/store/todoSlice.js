import { createSlice, current } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
const todos = [
  {
    id: v4(),
    description: 'first todo',
    title: 'first title',
    date: {
      timestamp: 1648677836685,
      dateString: '31/03/2022',
    },
    priority: 1,
    status: 2,
  },
  {
    id: v4(),
    description: 'second todo',
    title: 'second title',
    date: {
      timestamp: 1616623506595,
      dateString: '25/03/2021',
    },
    priority: 3,
    status: 1,
  },
];

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
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, editTodo, selectTodo } = todoSlice.actions;
