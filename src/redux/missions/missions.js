import { createSlice } from '@reduxjs/toolkit';
import { getMissions } from '../api';

const initialState = {
  missions: [],
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission(state, action) {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return {
        ...state,
        missions: [...newState],
      };
    },
    cancelMission(state, action) {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return {
        state,
        missions: [...newState],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => ({
      ...state,
      missions: [...action.payload],
    }));
  },
});

export const { joinMission, cancelMission } = missionSlice.actions;
export default missionSlice.reducer;
