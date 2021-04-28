import styled from 'styled-components';

function DetailInfo() {
  return (
    <InfoWrapper>
      <Confirm>
        <ConfirmTitle>확인매물</ConfirmTitle>
        <ConfirmText>
          방주인과 공인중개사가 거래정보를 확인한 매물입니다.
        </ConfirmText>
      </Confirm>
    </InfoWrapper>
  );
}

export default DetailInfo;

const InfoWrapper = styled.div`
  border: 1px solid black;
`;

const Confirm = styled.div``;

const ConfirmTitle = styled.p`
  display: inline-block;
  width: 132px;
  height: 36px;
  padding-top: 13px;
  color: #fff;
  background-color: #0747c0;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;

const ConfirmText = styled.p`
  display: inline-block;
  width: 1044px;
  height: 36px;
  padding: 13px 0px 0px 30px;
  color: #fff;
  background-color: #3665ce;
  font-size: 12px;
  font-weight: 500;
`;
