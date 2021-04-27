import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <ModalBackground>
        <LoginBox>
          <UpBox>
            <XIcon className="fas fa-times" />
            <Title>로그인</Title>
            <Input type="text" placeholder="아이디" />
            <Input type="text" placeholder="비밀번호" />
            <IdSelect>
              <span>
                <Label>
                  <input type="checkbox" name="idSave" />
                  아이디 저장
                </Label>
              </span>
              <ReSettingPw>비밀번호 재설정</ReSettingPw>
            </IdSelect>
            <DefaultLogin>로그인</DefaultLogin>
            <SocialLogin>
              <Kakao>카카오톡으로 시작</Kakao>
              <Facebook>페이스북으로 시작</Facebook>
            </SocialLogin>
            <Desc>
              아직 회원이 아니세요? <GoSignUp>이메일로 회원가입</GoSignUp>
            </Desc>
          </UpBox>
        </LoginBox>
      </ModalBackground>
    </Container>
  );
}

export default Login;

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

const LoginBox = styled.div`
  max-width: 420px;
  margin: 0px auto;
  padding: 10px 10px 40px;
  background-color: white;
  z-index: 5;
`;

const UpBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;

  & > * {
    margin: 10px;
  }
`;

const XIcon = styled.i`
  width: 10px;
  height: 10px;
  padding-left: 330px;
  font-size: 21px;
`;

const Title = styled.h1`
  color: #222;
  font-size: 25px;
`;

const Input = styled.input`
  width: 350px;
  height: 46px;
  padding: 0 10px;
  outline: none;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 3px;
`;

const IdSelect = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
`;

const Label = styled.label`
  color: #888;
  font-size: 14px;
`;

const ReSettingPw = styled.span`
  color: #444;
  font-size: 14px;
`;

const DefaultLogin = styled.button`
  width: 350px;
  height: 60px;
  background-color: #1a5ae8;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
`;

const SocialLogin = styled.div`
  color: #222;
  font-size: 25px;
`;

const SocialBtn = styled.button`
  width: 170px;
  height: 50px;
  border: none;
  outline: none;
  font-size: 14px;
`;

const Kakao = styled(SocialBtn)`
  margin-right: 10px;
  background-color: #f7e506;
  color: #222;
`;

const Facebook = styled(SocialBtn)`
  background-color: #354a87;
  color: white;
`;

const Desc = styled.h1`
  font-size: 14px;
  color: #444;
`;

const GoSignUp = styled.strong`
  color: #1564f9;
`;
