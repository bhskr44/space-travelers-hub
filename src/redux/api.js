import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getRockets = createAsyncThunk('space-travelers/getRockets', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    return response.data;
  } catch (error) {
    return error;
  }
});

export const getMissions = createAsyncThunk(
  'space-travelers/getMissions',
  async () => {
    try {
      const response = await axios.get(
        'https://api.spacexdata.com/v3/missions',
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export default getRockets;
