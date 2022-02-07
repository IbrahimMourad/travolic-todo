import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
const Todo = [
  {
    id: v4(),
    description: 'first todo',
  },
  {
    id: v4(),
    description: 'second todo',
  },
  {
    id: v4(),
    description: 'third todo',
  },
  {
    id: v4(),
    description: 'fourth todo',
  },
  {
    id: v4(),
    description: 'fifth todo',
  },
  {
    id: v4(),
    description: 'sixth todo',
  },
  {
    id: v4(),
    description: 'seventh todo',
  },
];

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: {
      Todo,
      'In-Progress': [
        {
          id: v4(),
          description: 'second todo',
        },
      ],
      Done: [],
    },
    selected: {},
  },
  reducers: {
    // Add Reducer
    addTodo: (state, { payload }) => {
      state.todos.Todo.push({
        description: payload,
        id: v4(),
      });
    },

    // Delete Reducer
    deleteTodo: (state, { payload: { location, id } }) => {
      state.todos[location] = state.todos[location].filter(
        (todo) => todo.id !== id
      );
    },

    // Edit Reducer
    selectTodo: (state, { payload: { location, id } }) => {
      const itemIndex = state.todos[location].findIndex(
        (item) => item.id === id
      );

      state.selected = { ...state.todos[location][itemIndex], location };
    },
    editTodo: (state, { payload }) => {
      state.todos[state.selected.location] = state.todos[
        state.selected.location
      ].map((todo) =>
        todo.id !== payload.id
          ? todo
          : { ...todo, description: payload.description }
      );
      state.selected = {};
    },
    dragDrop: (state, { payload: { destination, source, itemCopy } }) => {
      //Remove from old location array
      state.todos[source.droppableId].splice(source.index, 1);
      //Remove from new location array
      state.todos[destination.droppableId].splice(
        destination.index,
        0,
        itemCopy
      );
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, editTodo, selectTodo, dragDrop } =
  todoSlice.actions;
