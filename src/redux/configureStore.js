import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';
import missionsSlice from './missions/missionsSlice';

const allReducers = combineReducers({
  rockets: rocketsReducer,
  missions: missionsSlice.reducer,
});

const store = configureStore({
  reducer: allReducers,
});

export default store;

