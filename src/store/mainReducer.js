import { combineReducers } from 'redux';
import { tickets } from './reducers/tickets';

export const reducer = combineReducers({
  tickets,
});
