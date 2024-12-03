import { configureStore } from '@reduxjs/toolkit';
import slice from '../Components/Slice';

const store = configureStore({
  reducer: {
    dataKey: slice,
  },
});

export default store;