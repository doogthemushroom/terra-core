import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import ModalExamples from './examples/modal/Index';


// Test
/* eslint-disable import/first */
import ModalTestRoutes from 'terra-modal/tests/nightwatch/ModalTestRoutes';
/* eslint-enable import/first */

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="modal" component={ModalExamples} />
    </Route>
    {ModalTestRoutes}
  </Router>
), document.getElementById('root'));
