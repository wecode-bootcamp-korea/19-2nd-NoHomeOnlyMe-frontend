import React from 'react';
import styled from 'styled-components';
import Check from './Check';

export default function CheckBox({ checkList, title }) {
  return (
    <CheckContainer>
      <h1>{title}</h1>
      <h3>중복선택이 가능합니다.</h3>
      <CheckList>
        {checkList.map((check, idx) => {
          return <Check key={idx} check={check} index={idx} />;
        })}
      </CheckList>
    </CheckContainer>
  );
}

const CheckContainer = styled.div`
  margin-bottom: 15px;
  & > h1 {
    margin: 30px 30px 15px;
    font-size: 18px;
    color: #222;
  }
  & > h3 {
    margin: 0px 30px 35px;
    font-size: 13px;
    color: #868686;
  }
`;

const CheckList = styled.ul`
  display: flex;
  flex-direction: column;
`;
