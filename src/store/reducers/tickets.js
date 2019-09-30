import { LOAD_STATE } from '../../constants/loadState';
import { GET_SEARCH_ID, SEARCH_TICKETS, CHANGE_FILTER, SELECT_STOP } from '../actions/tickets';
import { SORTING_ENUM, STOPS, STOPS_ENUM } from '../../constants/dictionaries';
import { sortFromKey } from '../../utils/sortFromKey';
import { getSearchParam } from '../../utils/getSearchParam';

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
    sorting: getSearchParam('sorting') || SORTING_ENUM.CHEAPEST,
  },
};

const sortTickets = (tickets, sortingId) => {
  const keyExtractor = sortingId === SORTING_ENUM.CHEAPEST
    ? (ticket) => ticket.price
    : (ticket) => ticket.segments.reduce((acc, segment) => acc + segment.duration, 0);

  return tickets.sort(sortFromKey(keyExtractor));
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
    case CHANGE_FILTER.type: {
      const { sorting } = payload;
      const sortedTickets = sortTickets(state.list.value, sorting.id);

      return {
        ...state,
        list: {
          ...state.list,
          value: sortedTickets,
        },
        filters: {
          ...state.filters,
          sorting: sorting.id,
        }
      }
    }
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
    case SEARCH_TICKETS.done: {
      const sortedTickets = sortTickets(payload.tickets, state.filters.sorting);
      return {
        ...state,
        list: {
          ...state.list,
          loadingState: LOAD_STATE.DONE,
          value: sortedTickets,
          hasMore: !payload.stop,
        }
      }
    }
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
