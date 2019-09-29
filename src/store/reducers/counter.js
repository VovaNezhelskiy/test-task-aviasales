import { LOAD_STATE } from '../../constants/loadState';
import { ASYNC_INCREMENT, DECREMENT, INCREMENT } from '../actions/counter';

const initialState = {
  loadingState: LOAD_STATE.NOT_ASKED,
  errorMessage: null,
  value: 0,
};

export function counter(state = initialState, action) {
  const { type, paylaod } = action;

  switch (type) {
    case INCREMENT.type:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT.type:
      return {
        ...state,
        value: state.value - 1,
      };
    case ASYNC_INCREMENT.started:
      return {
        ...state,
        loadingState: LOAD_STATE.LOADING,
      };
    case ASYNC_INCREMENT.done:
      return {
        ...state,
        loadingState: LOAD_STATE.DONE,
      };
    case ASYNC_INCREMENT.failed:
      return {
        ...state,
        loadingState: LOAD_STATE.FAILED,
        errorMessage: paylaod,
      };
    default:
      return state;
  }
}
