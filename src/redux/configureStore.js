import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rockets';
import missionsSlice from './missions/missionsSlice';

const allReducers = combineReducers({
  rockets: rocketsSlice,
  missions: missionsSlice.reducer,
});

const store = configureStore({
  reducer: allReducers,
});

export default store;
