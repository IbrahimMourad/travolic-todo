import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const todos = [
  {
    id: v4(),
    description: 'tests',
    title: 'test1',
    date: {
      from: {
        timestamp: 1646249142822,
        dateString: '02/03/2022',
      },
      to: { timestamp: 1646421942822, dateString: '04/03/2022' },
    },
    status: 1,
    priority: 2,
    assignedUser: 'mohamed',
  },
  {
    id: v4(),
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae laborum harum temporibus id deleniti!',
    title: 'test2',

    date: {
      from: {
        timestamp: 1646941341230,
        dateString: '10/03/2022',
      },
      to: {
        timestamp: 1647718941230,
        dateString: '19/03/2022',
      },
    },
    priority: 3,
    status: 2,
    assignedUser: 'john',
  },
  {
    id: v4(),
    description: 'test3',
    title: 'test3',
    date: {
      from: {
        timestamp: 1641498290620,
        dateString: '06/01/2022',
      },
      to: {
        timestamp: 1642103090620,
        dateString: '13/01/2022',
      },
    },
    priority: 1,
    status: 3,
    assignedUser: 'ahmed',
  },
  {
    id: v4(),
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae laborum harum temporibus id deleniti!',
    title: 'Task4',
    date: {
      from: {
        timestamp: 1648237555040,
        dateString: '25/03/2022',
      },
      to: {
        timestamp: 1650224755040,
        dateString: '17/04/2022',
      },
    },
    priority: 2,
    status: 1,
    assignedUser: 'mohamed',
  },
];
const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: todos,
    selected: {},
    filterType: 'date',
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
      // Filter todo based on type
      state.filterType = filterType;

      switch (filterType) {
        case 'status':
          state.todos = state.todos.sort((a, b) => a.status - b.status);
          break;
        case 'priority':
          state.todos = state.todos.sort((a, b) => b.priority - a.priority);
          break;
        default:
          state.todos = state.todos.sort(
            (a, b) => a.date.from.timestamp - b.date.from.timestamp
          );
          break;
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, editTodo, selectTodo, filterTodo } =
  todoSlice.actions;
