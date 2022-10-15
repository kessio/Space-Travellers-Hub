/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const api = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  lists: [],
  status: null,
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await fetch(api);
    const data = await response.json();
    const rocketLists = []
    data.forEach(res => {
      const {
        id, flickr_images,description,rocket_name
      } = res;
     const newRocketLists = {
      id,
      flickr_images,
      description,
      rocket_name,
      reserved: false
     }
      rocketLists.push(newRocketLists)
      
    });
    return rocketLists;
    
  } 
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rockets = {
        ...state,
      };
      rockets.lists = rockets.lists.map((rocket) => {
        if(rocket.id !== action.payload){
          return rocket;
        }
       
    return { ...rocket,
       reserved: !rocket.reserved,
      };
      })
      return rockets;
    }
  },
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
export const { reserveRocket } = rocketsSlice.actions;
