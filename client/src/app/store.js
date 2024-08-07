import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../employeeComp/features/postSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
