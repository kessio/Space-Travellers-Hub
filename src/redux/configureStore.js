import { createStore, combineReducers } from 'redux';
import missionsReducer from './missions/missionsSlice';

const reducer = combineReducers(
    {
        misssions: missionsReducer,
    }
);

const store = createStore(
    reducer,
)

export default store;