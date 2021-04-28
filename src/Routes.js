import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/AccountPage/Login';
import SocialLogin from './Pages/AccountPage/SocialLogin';
import Detail from './Pages/DetailPage/Detail';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/sociallogin" component={SocialLogin} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </Router>
    );
  }
}
