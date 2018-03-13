import React, {Component} from 'react';
import {Router, Route, Switch} from "react-router";
import createHistory from 'history/createBrowserHistory';

import '../assets/reset.css';

import * as Routes from '../constants/Routes';

import Homepage from './Pages/Homepage/Home';

const history = createHistory();

export default function App() {
  return (
    <Router history={history} basename="/flowerxpress/">
      <Switch>
        <Route exact path={Routes.Home.path} component={Homepage} />
      </Switch>
    </Router>
  )
}
