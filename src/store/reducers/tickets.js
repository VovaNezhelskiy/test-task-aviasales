import { LOAD_STATE } from '../../constants/loadState';
import { GET_SEARCH_ID, SEARCH_TICKETS, SELECT_SORTING, SELECT_STOP } from '../actions/tickets';
import { SORTING_ENUM, STOPS, STOPS_ENUM } from '../../constants/dictionaries';

const reducedStops = STOPS.reduce((acc, stop) => ({ ...acc, [stop.id]: false }), {});

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
  },
  filters: {
    stops: reducedStops,
    sorting: SORTING_ENUM.CHEAPEST,
  },
};

export function tickets(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SELECT_STOP.type: {
      let updatedStops = state.filters.stops;

      if (payload === STOPS_ENUM.ALL) {
        updatedStops = Object
          .keys(state.stops)
          .reduce((acc, id) => ({ ...acc, [id]: !state.filters.stops[payload] }), {})
      } else {
        updatedStops = { ...state.filters.stops, [payload]: !state.filters.stops?.[payload] };
      }

      return {
        ...state,
        filters: {
          ...state.filters,
          stops: updatedStops,
        }
      };
    }
    case SELECT_SORTING.type:
      return {
        ...state,
        filters: {
          ...state.filters,
          sorting: payload,
        }
      };
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
