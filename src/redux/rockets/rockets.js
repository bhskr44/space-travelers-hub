import { createSlice } from '@reduxjs/toolkit';
import getRockets from '../api';

const initialState = {
  rockets: [],
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookReservation(state, action) {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: [...newState],
      };
    },
    cancelReservation(state, action) {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      return {
        state,
        rockets: [...newState],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => ({
      ...state,
      rockets: action.payload,
    }));
  },
});

export const { bookReservation, cancelReservation } = rocketSlice.actions;
export default rocketSlice.reducer;
