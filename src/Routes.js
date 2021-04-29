import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/AccountPage/Login';
import SignUp from './Pages/AccountPage/SignUp';
import SignUpForm from './Pages/AccountPage/SignUpForm';
import SocialLogin from './Pages/AccountPage/SocialLogin';
import Modal from './Components/Modal';
import Detail from './Pages/DetailPage/Detail';
import PhotoSlide from './Pages/DetailPage/components/ PhotoSlide';

export default function Routes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState('login');

  const changeType = type => {
    setType(type);
  };

  const changeModalOpen = bool => {
    setIsModalOpen(bool);
  };

  const modalTypeTable = {
    login: <Login changeType={changeType} changeModalOpen={changeModalOpen} />,
    signup: (
      <SignUp changeType={changeType} changeModalOpen={changeModalOpen} />
    ),
    signupform: (
      <SignUpForm changeType={changeType} changeModalOpen={changeModalOpen} />
    ),
    photoslide: (
      <PhotoSlide changeType={changeType} changeModalOpen={changeModalOpen} />
    ),
  };

  return (
    <Router>
      {isModalOpen && (
        <Modal
          changeModalOpen={changeModalOpen}
          changeType={changeType}
          type={type}
          modalTypeTable={modalTypeTable}
        />
      )}
      <button onClick={() => changeModalOpen(true)}>로그인 회원가입</button>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signupform" component={SignUpForm} />
        <Route exact path="/socialLogin" component={SocialLogin} />
        <Route
          exact
          path="/detail"
          render={() => (
            <Detail changeModalOpen={changeModalOpen} changeType={changeType} />
          )}
        />
        <Route exact path="/photoslide" component={PhotoSlide} />
      </Switch>
    </Router>
  );
}
