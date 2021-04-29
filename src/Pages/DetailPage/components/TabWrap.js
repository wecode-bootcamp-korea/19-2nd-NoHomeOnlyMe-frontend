import styled from 'styled-components';

export default function TabWrap({ clickMenu }) {
  return (
    <Tab>
      <Convenience onClick={() => clickMenu(1)}>편의시설</Convenience>
      <Safety onClick={() => clickMenu(2)}>안전시설</Safety>
      <Education onClick={() => clickMenu(3)}>학군정보</Education>
    </Tab>
  );
}

const Tab = styled.div`
  display: flex;
  justify-content: center;
  width: 850px;
  height: 60px;
  margin: 0 auto;
  border-bottom: 1px solid ${props => props.theme.infoName};
`;

const Convenience = styled.button`
  width: 120px;
  height: 55px;
  padding: 0px 30px 0px 30px;
  margin-top: 2px;
  background-color: #fff;
  color: ${props => props.theme.infoName};
  font-size: 16px;
  border: 0px;
  cursor: pointer;
  &:active {
    outline: none;
  }
`;

const Safety = styled(Convenience)``;

const Education = styled(Convenience)``;
