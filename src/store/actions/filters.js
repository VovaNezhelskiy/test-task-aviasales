import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const SELECT_STOP = actionCreator('SELECT_STOP');
export const SELECT_SORTING = actionCreator('SELECT_SORTING');
