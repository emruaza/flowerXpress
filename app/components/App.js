import React, {Component} from 'react';
import {Router, Route, Switch} from "react-router";
import createHistory from 'history/createBrowserHistory';

import * as Routes from '../constants/Routes';

import Homepage from './Pages/Homepage';

const history = createHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={Routes.Home.path} component={Homepage} />
      </Switch>
    </Router>
  )
}
