import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = "https://api.spacexdata.com/v3/rockets";

  const initialState = {
    rockets: [],
    status: "idle",
    Error: null
  };

  export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () =>{
     const response = await axios.get(api);
     return response.data;

   });

  const rocketsSlice = ({
    name: "rockets",
    initialState, 
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(fetchRockets.pending, (state, action)=> {
            state.status = "Loading"
        })
        .addCase(fetchRockets.fulfilled, (state, action)=> {
            state.status = "Success",
            state.rockets = action.payload
        })
        .addCase(fetchRockets.rejected, (state, action)=> {
            state.status = "Fail"
        })
        
    }

    
  });

  export default rocketsSlice.reducer