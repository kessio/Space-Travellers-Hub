import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';

const allReducers = combineReducers({
  rockets: rocketsReducer,
});

const store = configureStore({
  reducer: allReducers,
});

export default store;
