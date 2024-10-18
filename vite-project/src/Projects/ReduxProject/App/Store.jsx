import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/Slice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;