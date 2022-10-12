import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  lists: [],
  status: null,
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => (await axios.get(api)).data,
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: {
    [fetchRockets.pending]: (state, action) => {
      state.status = 'Loading';
    },
    [fetchRockets.fulfilled]: (state, { payload }) => {
      state.lists = payload,
      state.status = 'Success';
    },
    [fetchRockets.rejected]: (state, action) => {
      state.status = 'Failed';
    },
  },

});

export default rocketsSlice.reducer;
