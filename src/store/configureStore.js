import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './mainReducer';

// eslint-disable-next-line no-undef
const composeEnhancers = process.env.NODE_ENV === 'production'
  ? compose
  : composeWithDevTools({ shouldHotReload: false });

export function configureStore() {
  const middleware = [thunk];
  const enhancer = composeEnhancers(applyMiddleware(...middleware));

  return createStore(reducer, enhancer);
}
