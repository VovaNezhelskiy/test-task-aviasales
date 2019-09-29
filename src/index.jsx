import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/configureStore';
import { Provider } from 'react-redux';
import { AppContainer } from './modules';

import './styles/normilaze.css';
import './styles/colors.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
