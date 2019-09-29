import { LOAD_STATE } from '../../constants/loadState';
import { GET_SEARCH_ID, SEARCH_TICKETS } from '../actions/tickets';

const initialState = {
  searchId: {
    loadingState: LOAD_STATE.NOT_ASKED,
    errorMessage: null,
    value: null,
  },
  list: {
    loadingState: LOAD_STATE.NOT_ASKED,
    errorMessage: null,
    value: [],
    hasMore: true,
  }
};

export function tickets(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SEARCH_ID.started:
      return {
        ...state,
        searchId: {
          ...state.searchId,
          loadingState: LOAD_STATE.LOADING,
        }
      };
    case GET_SEARCH_ID.done:
      return {
        ...state,
        searchId: {
          ...state.searchId,
          loadingState: LOAD_STATE.DONE,
          value: payload,
        }
      };
    case GET_SEARCH_ID.failed:
      return {
        ...state,
        searchId: {
          ...state.searchId,
          loadingState: LOAD_STATE.FAILED,
          errorMessage: payload,
        }
      };
    case SEARCH_TICKETS.started:
      return {
        ...state,
        list: {
          ...state.list,
          loadingState: LOAD_STATE.LOADING,
        }
      };
    case SEARCH_TICKETS.done:
      return {
        ...state,
        list: {
          ...state.list,
          loadingState: LOAD_STATE.DONE,
          value: [...state.list.value, ...payload.tickets],
          hasMore: !payload.stop,
        }
      };
    case SEARCH_TICKETS.failed:
      return {
        ...state,
        list: {
          ...state.list,
          loadingState: LOAD_STATE.FAILED,
          errorMessage: payload,
        }
      };
    default: return state;
  }
}
