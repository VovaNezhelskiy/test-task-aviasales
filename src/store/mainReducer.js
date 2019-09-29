import { combineReducers } from 'redux';
import { counter } from './reducers/counter';

export const reducer = combineReducers({
  counter,
});
