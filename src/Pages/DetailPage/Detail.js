import DetailHeader from './components/DetailHeader';
import styled from 'styled-components';

function Detail() {
  return (
    <Wrapper>
      <DetailHeader />
    </Wrapper>
  );
}

export default Detail;

const Wrapper = styled.div`
  width: 1180px;
  height: auto;
  margin: 0 auto;
  border: 1px solid red;
`;
