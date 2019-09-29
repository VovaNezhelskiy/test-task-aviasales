import { combineReducers } from 'redux';
import { filters } from './reducers/filters';

export const reducer = combineReducers({
  filters,
});
