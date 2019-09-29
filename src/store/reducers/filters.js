import { SELECT_STOP } from '../actions/filters';
import { STOPS, STOPS_ENUM } from '../../constants/dictionaries';

const reducedStops = STOPS.reduce((acc, stop) => ({ ...acc, [stop.id]: false }), {});

const initialState = {
  stops: reducedStops,
};

export function filters(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SELECT_STOP.type: {
      let updatedStops = state.stops;
      if (payload === STOPS_ENUM.ALL) {
        updatedStops = Object
          .keys(state.stops)
          .reduce((acc, id) => ({ ...acc, [id]: !state.stops[payload] }), {})
      } else {
        updatedStops = { ...state.stops, [payload]: !state.stops?.[payload] };
      }

      return {
        ...state,
        stops: updatedStops,
      };
    }
    default: return state;
  }
}
