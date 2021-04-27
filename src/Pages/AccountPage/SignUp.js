import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function SignUp({ changeType, changeModalOpen }) {
  const [dlList, setDlList] = useState([]);
  const [circleClickArr, setcircleClickArr] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('/data/SignUp.json')
      .then(res => res.json())
      .then(data => {
        setDlList(data);
        setcircleClickArr(Array.from({ length: data.length }, () => false));
      });
  };

  const selectCircleClick = index => {
    setcircleClickArr(
      circleClickArr.map((circle, i) => (i === index ? !circle : circle))
    );
  };

  const isCircleAllClick = () => {
    setcircleClickArr(circleClickArr.map(circle => !isCircleAllChecked()));
  };

  const isCircleAllChecked = () => {
    return circleClickArr.every(circle => circle);
  };

  return (
    <Signup>
      <Header>
        <span>약관동의</span>
        <XIcon
          onClick={() => changeModalOpen(false)}
          className="fas fa-times"
        />
      </Header>
      <Main>
        {dlList.map((dl, index) => {
          return (
            <Dl key={dl.id}>
              <DT onClick={() => selectCircleClick(index)}>
                <span>
                  {dl.title}
                  <strong>
                    {index === dlList.length - 1 ? '(선택)' : '(필수)'}
                  </strong>
                </span>
                <CircleIcon
                  isChecked={circleClickArr[index]}
                  className="far fa-check-circle"
                />
              </DT>
              <DD isExist={!!dl.descContent}>
                <strong className="title">{dl.descTitle}</strong>
                <p>{dl.descContent}</p>
              </DD>
            </Dl>
          );
        })}
        <AgreeAll>
          <span>
            모두 동의합니다.<strong>(필수)</strong>
          </span>
          <CircleIcon
            isChecked={isCircleAllChecked()}
            onClick={isCircleAllClick}
            className="far fa-check-circle"
          />
        </AgreeAll>
      </Main>
      <Submit onClick={() => changeType('signupform')}>확인</Submit>
    </Signup>
  );
}

const Signup = styled.article`
  max-width: 540px;
  margin: 0 auto;
  background-color: white;
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
  padding: 15px;

  & * {
    color: #222;
  }
`;

const Dl = styled.dl`
  margin-bottom: 20px;
`;

const DT = styled.dt`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 480px;
  margin-bottom: 10px;

  & > i {
    color: rgb(214, 214, 214);
    font-size: 25px;
  }

  & > span > strong {
    margin-left: 2px;
    color: #1564f9;
    font-size: 16px;
  }
`;

const DD = styled.dd`
  width: 480px;
  max-height: 130px;
  padding: ${props => (props.isExist ? '10px' : '0px')};
  background-color: rgba(233, 233, 233, 0.507);
  line-height: 20px;
  overflow-y: scroll;

  & > strong {
    font-size: 13px;
    font-weight: bold;
    color: #222;
  }

  & > p {
    font-size: 13px;
    color: #222;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #a3a3a3;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(233, 233, 233, 0.507);
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const CircleIcon = styled.i`
  &:before {
    color: ${props => (props.isChecked ? '#1564f9' : 'rgb(214, 214, 214)')};
  }
`;

const AgreeAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > i {
    color: rgb(214, 214, 214);
    font-size: 25px;
  }

  & > span {
    font-size: 16px;
    line-height: 25px;
    color: #222;
    margin-right: 10px;
  }
`;

const Submit = styled.button`
  width: 540px;
  height: 70px;
  color: white;
  outline: none;
  border: none;
  background-color: #1a5ae8;
  font-size: 17px;
`;
