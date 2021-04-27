import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function SocialLogin() {
  const { Kakao } = window;
  const kakaoLogin = () => {
    Kakao.Auth.login({
      success: res => {
        console.log(res);
      },
      fail: err => {
        console.log(err);
      },
    });
  };

  useEffect(() => {
    console.log(window.Kakao);
  }, []);

  return <Button onClick={kakaoLogin}>카카오톡으로 시작</Button>;
}

export default SocialLogin;

const Button = styled.button`
  width: 170px;
  height: 50px;
  color: rgb(34, 34, 34);
  background-color: rgb(247, 229, 6);
  font-size: 14px;
  border: 0px;
`;
