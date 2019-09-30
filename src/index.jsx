import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route, Router, Switch } from 'react-router';
import { configureStore } from './store/configureStore';
import { Provider } from 'react-redux';
import { AppContainer } from './modules';
import { history } from './utils/history';

import './styles/normilaze.css';
import './styles/colors.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/tickets">
          <AppContainer />
        </Route>

        <Route path="/">
          <Redirect to={"/tickets"} />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
