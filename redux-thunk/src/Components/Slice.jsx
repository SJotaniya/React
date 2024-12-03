import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getApi = createAsyncThunk('getApi', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  return response.json();
});

export const slice = createSlice({
  name: 'slice',
  initialState: {
    data: [],
    loading: true,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(getApi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default slice.reducer;
