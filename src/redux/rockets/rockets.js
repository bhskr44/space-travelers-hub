import { createSlice } from '@reduxjs/toolkit';
import getRockets from '../api';

const initialState = {
  rockets: [],
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => ({
      ...state,
      rockets: [...action.payload],
    }));
  },
});

//   export const { addBook, removeBook } = bookSlice.actions;
export default rocketSlice.reducer;
