import {combineReducers} from '@reduxjs/toolkit';
import feed from './Feed';

const appReducer = combineReducers({
  feed,
});

const rootReducer = (state, action) =>
  appReducer(state, action);

export default rootReducer;
