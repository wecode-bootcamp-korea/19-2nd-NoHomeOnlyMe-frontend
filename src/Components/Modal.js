import React, { useState } from 'react';
import styled from 'styled-components';
import Login from '../Pages/AccountPage/Login';
import SignUpForm from '../Pages/AccountPage/SignUpForm';
import SignUp from '../Pages/AccountPage/SignUp';

export default function Modal({ changeModalOpen }) {
  const [type, setType] = useState('login');

  const changeType = type => {
    setType(type);
  };

  const modalTypeTable = {
    login: <Login changeType={changeType} changeModalOpen={changeModalOpen} />,
    signup: (
      <SignUp changeType={changeType} changeModalOpen={changeModalOpen} />
    ),
    signupform: (
      <SignUpForm changeType={changeType} changeModalOpen={changeModalOpen} />
    ),
  };

  return (
    <Container>
      <ModalBackground>{modalTypeTable[type]}</ModalBackground>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 200px;
  background-color: rgba(0, 0, 0, 0.705);
  z-index: 3;
`;
