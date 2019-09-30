import { actionCreatorFactory } from 'typescript-fsa';
import { asyncActionTypeCreator } from '../../utils/asyncActionTypeCreator';
import { baseRequest } from '../../api/baseRequest';
import { END_POINTS } from '../../endpoints';

const actionCreator = actionCreatorFactory();

export const GET_SEARCH_ID = asyncActionTypeCreator('GET_SEARCH_ID');
const asyncGetSearchId = actionCreator.async('GET_SEARCH_ID');

export const getSearchId = () => async (dispatch) => {
  dispatch(asyncGetSearchId.started());

  try {
    const { searchId } = await baseRequest(END_POINTS.searchId());
    dispatch(asyncGetSearchId.done(searchId))
  } catch (error) {
    dispatch(asyncGetSearchId.failed(error));
  }
};

export const SEARCH_TICKETS = asyncActionTypeCreator('SEARCH_TICKETS');
const asyncSearchTickets = actionCreator.async('SEARCH_TICKETS');

export const searchTickets = () => async (dispatch, getState) => {
  const { tickets: { searchId: { value: id } } } = getState();

  dispatch(asyncSearchTickets.started());

  try {
    const data = await baseRequest(END_POINTS.tickets(id));
    dispatch(asyncSearchTickets.done(data))
  } catch (error) {
    console.log(error);
    dispatch(asyncSearchTickets.failed(error));
  }
};

export const SELECT_STOP = actionCreator('SELECT_STOP');
export const CHANGE_FILTER = actionCreator('CHANGE_FILTER');
