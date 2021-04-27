import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/AccountPage/Login';
import SocialLogin from './Pages/AccountPage/SocialLogin';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/socialLogin" component={SocialLogin} />
        </Switch>
      </Router>
    );
  }
}
