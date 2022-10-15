/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const MISSIONS_FETHCED = 'redux/missions/missions.js';
const missionsURL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  data: [],
  loading: false,
};

export const fetchMisions = createAsyncThunk(
  MISSIONS_FETHCED,
  async () => {
    const response = await fetch(missionsURL);
    const data = await response.json();
    const missiondata = [];
    data.forEach((res) => {
      const {
        mission_id, mission_name, description,
      } = res;
      const missionData = {
        mission_id,
        mission_name,
        description,
        reserved: false,
      };
      missiondata.push(missionData);
    });
    return missiondata;
  },
);

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    removeMission: (state, action) => {
      const missions = {
        ...state,
      };

      missions.data = missions.data.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return {
          ...mission,
          reserved: !mission.reserved,
        };
      });
      return missions;
    },
  },

  extraReducers: {
    [fetchMisions.pending.type]: (state) => (
      {
        ...state,
        loading: true,
      }
    ),
    [fetchMisions.fulfilled.type]: (state, action) => (
      {
        ...state,
        loading: false,
        data: action.payload,
      }
    ),
    [fetchMisions.rejected.type]: (state) => (
      {
        ...state,
        loading: false,
      }
    ),
  },
});

export default missionsSlice;
export const { removeMission } = missionsSlice.actions;
