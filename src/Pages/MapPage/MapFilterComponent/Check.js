import React from 'react';
import styled from 'styled-components';

export default function Check({ check, index }) {
  return (
    <CheckContainer>
      <input defaultChecked={true} type="checkbox" id={index} />
      <label htmlFor={index}>{check}</label>
    </CheckContainer>
  );
}

const CheckContainer = styled.div`
  & > * {
    margin: 0px 30px 15px;
  }
  & > input {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    padding-top: 5px;
    position: relative;
    top: 4px;
  }
  & > label {
    margin-left: 5px;
    color: #4c4c4c;
    font-size: 14px;
  }
`;
