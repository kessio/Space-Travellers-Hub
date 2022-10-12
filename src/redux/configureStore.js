<<<<<<< HEAD
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
=======
import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';

const store = configureStore({
    reducer: {
      missions: missionsSlice.reducer,
    },
});

export default store;
>>>>>>> 4685b3fa623a78471ce5e084e33ea8b5a7347b90
