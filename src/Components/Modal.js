import styled from 'styled-components';

export default function Modal({ type, modalTypeTable }) {
  return <Container>{modalTypeTable[type]}</Container>;
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.705);
  z-index: 3;
`;
