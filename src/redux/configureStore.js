import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rockets';
import missionsSlice from './missions/missionsSlice';
import logger from 'redux-logger';

const allReducers = combineReducers({
  rockets: rocketsSlice,
  missions: missionsSlice.reducer,
});

const store = configureStore({
  reducer: allReducers,
},
applyMiddleware(logger),
);

export default store;
