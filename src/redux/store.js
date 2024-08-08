import { configureStore } from '@reduxjs/toolkit';
// import { tasksReducer, filtersReducer } from './reducer';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
