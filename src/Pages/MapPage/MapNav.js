import React from 'react';
import styled from 'styled-components';

export default function MapNav({ setFilterBox }) {
  return (
    <Header onClick={() => setFilterBox(false)}>
      <span>다방</span>
      <Nav>
        <a href="/">지도</a>
        <a href="/">분양</a>
        <a href="/">관심목록</a>
        <a href="/">방 내놓기</a>
        <a href="/">알림</a>
        <a href="/">로그인 / 회원가입</a>
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid rgb(233, 233, 233);

  & > span {
    color: rgb(50, 108, 249);
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  display: inline-block;

  & > a {
    margin-right: 18px;
    color: rgb(134, 134, 134);
    font-size: 14px;
    text-decoration: none;
  }

  & > a:nth-last-child(1) {
    padding: 5px;
    border: 1px solid rgb(233, 233, 233);
  }
`;
