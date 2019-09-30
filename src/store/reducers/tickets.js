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
    noFilters: [],
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

const updateStops = (oldStops, stopId) => {
  if (stopId === STOPS_ENUM.ALL) {
    return Object
      .keys(oldStops)
      .reduce((acc, id) => ({ ...acc, [id]: !oldStops[stopId] }), {})
  }

  return { ...oldStops, [stopId]: !oldStops?.[stopId] };
};

const filterTickets = (tickets, filters) => {
  const allFiltersSelected = Object.values(filters).filter(Boolean).length === STOPS.length;
  const noOneSelected = Object.values(filters).filter(Boolean).length === 0;
  const includeAll = filters[STOPS_ENUM.ALL];
  const includeWithout = filters[STOPS_ENUM.WITHOUT];
  const includeWithOne = filters[STOPS_ENUM.WITH_ONE];
  const includeWithTwo = filters[STOPS_ENUM.WITH_TWO];
  const includeWithThree = filters[STOPS_ENUM.WITH_THREE];

  return tickets.filter(ticket => {
    const stopsCount = ticket.segments.reduce((acc, item) => acc + item.stops.length, 0);
    if (allFiltersSelected || noOneSelected) {
      return true;
    }

    return (
      includeAll
      || (includeWithout && (stopsCount === 0))
      || (includeWithOne && (stopsCount === 1))
      || (includeWithTwo && (stopsCount === 2))
      || (includeWithThree && (stopsCount === 3))
    )
  })
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
      const { sorting, stop } = payload;
      const tickets = state.list.noFilters;
      const hasUpdatedSorting = Boolean(sorting);
      const hasUpdatedStops = Boolean(stop);

      const updatedSorting = hasUpdatedSorting ? sorting.id : state.filters.sorting;
      const updatedStops = hasUpdatedStops
        ? updateStops(state.filters.stops, stop.id)
        : state.filters.stops;

      const filteredTickets = hasUpdatedStops ? filterTickets(tickets, updatedStops) : tickets;
      const sortedTickets = hasUpdatedSorting ? sortTickets(filteredTickets, sorting.id) : filteredTickets;

      return {
        ...state,
        list: {
          ...state.list,
          value: sortedTickets,
        },
        filters: {
          stops: updatedStops,
          sorting: updatedSorting,
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
          noFilters: sortedTickets,
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
