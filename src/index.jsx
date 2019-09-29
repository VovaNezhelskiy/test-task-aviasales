import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/configureStore';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { asyncIncrement, DECREMENT, INCREMENT } from './store/actions/counter';

const store = configureStore();

export function App() {
  const dispatch = useDispatch();
  const { value } = useSelector(state => state.counter);

  return (
    <React.Fragment>
      <button onClick={() => dispatch(INCREMENT())}>+</button>
      <button onClick={() => dispatch(DECREMENT())}>-</button>
      <button onClick={() => dispatch(asyncIncrement())}>Async +</button>
      {value}
    </React.Fragment>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
