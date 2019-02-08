import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { Switch, Route } from 'react-router';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { createLogger } from 'redux-logger';

// -- Setup Imports
import { rootReducer } from 'reducers';
import { rootEpic } from 'epics';
import Router from 'router';

import 'styles/main.scss';

// -- Setup
const logger = createLogger({
  collapsed: true,
  duration: true, // print the duration of each action?
  timestamp: true, // print the timestamp with each action?
  level: 'log', // 'log' | 'console' | 'warn' | 'error' | 'info', // console's level
  diff: true,
});

const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer(history), applyMiddleware(routerMiddleware(history), epicMiddleware, logger));
epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);