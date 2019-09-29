import { actionCreatorFactory } from 'typescript-fsa';
import { asyncActionTypeCreator } from '../../utils/asyncActionTypeCreator';

const actionCreator = actionCreatorFactory();

export const INCREMENT = actionCreator('INCREMENT');
export const DECREMENT = actionCreator('DECREMENT');

export const ASYNC_INCREMENT = asyncActionTypeCreator('ASYNC_INCREMENT');
const asyncAsyncIncrement = actionCreator.async('ASYNC_INCREMENT');

export const asyncIncrement = () => (dispatch) => {
  dispatch(asyncAsyncIncrement.started());
  try {
    // some async acitons
    dispatch(asyncAsyncIncrement.done('success'));
  } catch (error) {
    dispatch(asyncAsyncIncrement.failed(error));
  }
};
