import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/AccountPage/Login';
import SignUp from './Pages/AccountPage/SignUp';
import SignUpForm from './Pages/AccountPage/SignUpForm';
import SocialLogin from './Pages/AccountPage/SocialLogin';
import Modal from './Components/Modal';
import Detail from './Pages/DetailPage/Detail';

export default function Routes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeModalOpen = bool => {
    setIsModalOpen(bool);
  };
  return (
    <Router>
      {isModalOpen && <Modal changeModalOpen={changeModalOpen} />}
      <button onClick={() => changeModalOpen(true)}>로그인 회원가입</button>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signupform" component={SignUpForm} />
        <Route exact path="/socialLogin" component={SocialLogin} />
        <Route exact path="/detail" component={Detail} />
      </Switch>
    </Router>
  );
}
