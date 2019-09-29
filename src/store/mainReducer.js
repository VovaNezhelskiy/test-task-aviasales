import { combineReducers } from 'redux';
import { filters } from './reducers/filters';
import { tickets } from './reducers/tickets';

export const reducer = combineReducers({
  filters,
  tickets,
});
