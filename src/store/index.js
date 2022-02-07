import { configureStore } from '@reduxjs/toolkit';
import todo from './todoSlice';

export const store = configureStore({
  reducer: { todo },
});
