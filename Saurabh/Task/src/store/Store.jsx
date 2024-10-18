import { configureStore } from '@reduxjs/toolkit';
import taskSlice from '../feature/Slice'; // Path to your tasks slice

const store = configureStore({
  reducer: {
    tasks: taskSlice
  }
});

export default store;
