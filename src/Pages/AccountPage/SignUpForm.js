import React, { useRef } from 'react';
import styled from 'styled-components';

export default function SignUpForm({ changeModalOpen }) {
  const inputRef = useRef({ phoneFirst: '010' });

  const submitBtnClick = () => {
    const { name, password, passwordSecond } = inputRef.current;
    if (!name || name.length < 3) {
      alert('name is too short!!');
      return;
    }
    if (password !== passwordSecond) {
      alert('password is not same!!');
      return;
    }

    fetchSignUp(inputRef.current);
  };

  const fetchSignUp = ({
    name,
    emailFirst,
    emailSecond,
    password,
    phoneFirst,
    phoneSecond,
    phoneThird,
  }) => {
    fetch('http://serverip:8000', {
      method: 'post',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        name: name,
        email: emailFirst + '@' + emailSecond,
        password: password,
        phone: phoneFirst + phoneSecond + phoneThird,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.MESSAGE === 'SUCCESS') {
          changeModalOpen(false);
        }
      });
  };

  const inputChange = e => {
    const { name, value } = e.target;
    inputRef.current = { ...inputRef.current, [name]: value };
  };

  return (
    <Container>
      <Header>
        <span>회원가입</span>
        <XIcon
          onClick={() => changeModalOpen(false)}
          className="fas fa-times"
        />
      </Header>
      <Main>
        <InputBox>
          <span>이름</span>
          <FormContainer>
            <Input type="text" name="name" onChange={inputChange} />
          </FormContainer>
        </InputBox>
        <InputBox>
          <span>이메일</span>
          <FormContainer>
            <EmailFirst type="text" name="emailFirst" onChange={inputChange} />@
            <EmailSecond name="emailSecond" onChange={inputChange}>
              <option value="">선택해주세요</option>
              <option value="naver.com">naver.com</option>
              <option value="daum.net">daum.net</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="hotmail.com">hotmail.com</option>
              <option value="nate.com">nate.com</option>
              <option value="yahoo.co.kr">yahoo.co.kr</option>
              <option value="paran.com">paran.com</option>
              <option value="empas.com">empas.com</option>
              <option value="dreamwiz.com">dreamwiz.com</option>
              <option value="freechal.com">freechal.com</option>
              <option value="lycos.co.kr">lycos.co.kr</option>
              <option value="korea.com">korea.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="hanmir.com">hanmir.com</option>
            </EmailSecond>
          </FormContainer>
        </InputBox>
        <InputBox>
          <span>비밀번호</span>
          <FormContainer>
            <Input type="password" name="password" onChange={inputChange} />
          </FormContainer>
        </InputBox>
        <InputBox>
          <span>비밀번호확인</span>
          <FormContainer>
            <Input
              type="password"
              name="passwordSecond"
              onChange={inputChange}
            />
          </FormContainer>
        </InputBox>
        <InputBox>
          <span>핸드폰 번호</span>
          <FormContainer>
            <PhoneFirst name="phoneFirst" onChange={inputChange}>
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
            </PhoneFirst>
            -
            <PhoneSecond
              type="text"
              name="phoneSecond"
              onChange={inputChange}
            />
            -
            <PhoneSecond type="text" name="phoneThird" onChange={inputChange} />
            <NumRequest>인증번호 요청</NumRequest>
          </FormContainer>
        </InputBox>
        <Message>
          * 만14세 이상 회원 가입 가능합니다. 해당 내용은
          <a href="/">이용약관 및 정책</a>에서도 확인이 가능합니다.
        </Message>
      </Main>

      <Submit onClick={submitBtnClick}>이메일 회원가입</Submit>
    </Container>
  );
}

const Container = styled.article`
  max-width: 610px;
  margin: 0 auto;
  background-color: white;
`;

const XIcon = styled.i`
  width: 10px;
  height: 10px;
  font-size: 21px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 81px;
  padding: 0 20px;
  border-bottom: 1px solid rgb(216, 216, 216);

  & > span {
    font-size: 22px;
    color: #222;
  }
  & > i {
    width: 16px;
    height: 16px;
    font-size: 20px;
  }
`;

const Input = styled.input`
  width: 450px;
  height: 46px;
  border: 1px solid rgb(219, 219, 219);
  outline: none;
  border-radius: 2px;
  padding: 5px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  margin-bottom: 20px;
  font-size: 14px;

  & > span:nth-child(1) {
    width: 100px;
    height: 14px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
`;

const EmailFirst = styled(Input)`
  width: 138px;
`;

const EmailSecond = styled(Input.withComponent('select'))`
  width: 285px;
`;

const PhoneFirst = styled(Input.withComponent('select'))`
  width: 89px;
`;

const PhoneSecond = styled(Input)`
  width: 95px;
  margin: 0 3.7px;
`;

const NumRequest = styled.button`
  position: relative;
  top: 2px;
  width: 120px;
  height: 46px;
  padding: 5px;
  color: #1a5ae8;
  background-color: white;
  outline: none;
  border: 1px solid #1a5ae8;
`;

const Message = styled.p`
  width: 550px;
  height: 17px;
  margin-top: 20px;
  font-size: 13px;
  color: #888;

  & > a {
    color: #1a5ae8;
  }
`;

const Submit = styled.button`
  width: 610px;
  height: 70px;
  background-color: #1a5ae8;
  outline: none;
  border: none;
  color: white;
  font-size: 17px;
`;
