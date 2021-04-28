import styled from 'styled-components';

function DetailHeader() {
  return (
    <HeaderWrapper>
      <OneRome>
        <OneRomeTitle>원룸</OneRomeTitle>
        <Monthly>월세 500/50</Monthly>
        <Price>만원</Price>
      </OneRome>
      <Area>
        <AreaTitle>전용면적</AreaTitle>
        <ExclusiveArea>22.64㎡</ExclusiveArea>
        <Pyeong>
          <Content>평</Content>
        </Pyeong>
      </Area>
      <Dwelling>
        <DwellingTitle>한달 예상 주거비</DwellingTitle>
        <MonthPrice>55만 원 + α</MonthPrice>
      </Dwelling>
      <Info>
        <InfoBox>
          <InfoTitle>삼성공인중개사사무소</InfoTitle>
          <InfoName>김다방</InfoName>
        </InfoBox>
        <Contact>연락처보기</Contact>
        <Phone>
          <i className="xi-call"></i>
        </Phone>
      </Info>
    </HeaderWrapper>
  );
}

export default DetailHeader;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1180px
  height: 107px;
  padding-top: 35px;
  margin-bottom: 35px;
`;

const OneRome = styled.div`
  width: 194px;
  height: 72px;
`;

const OneRomeTitle = styled.p`
  margin: 5px 0px 5px 0px;
  color: #858585;
  font-size: 14px;
`;

const Monthly = styled.h1`
  display: inline-block;
  height: 45px;
  padding-top: 8px;
  font-size: 30px;
  font-weight: bold;
`;

const Price = styled.span`
  width: 27px;
  height: 15px;
  margin-top: 8px;
  margin-left: 3px;
  color: #858585;
  font-size: 15px;
`;

const Area = styled.div`
  position: relative;
  width: 175px;
  height: 72px;
  padding-left: 28px;
  margin-left: 28px;
  border-left: 1px solid #e7e7e7;
`;

const AreaTitle = styled(OneRomeTitle)``;

const ExclusiveArea = styled(Monthly)``;

const Pyeong = styled.button`
  position: absolute;
  width: 35px;
  height: 25px;
  margin-left: 5px;
  border: 1px solid #e7e7e7;
  border-radius: 2px;
  background-color: #fff;
  top: 33px;
`;

const Content = styled.span`
  font-size: 11px;
  text-align: center;
`;

const Dwelling = styled(Area)``;

const DwellingTitle = styled(OneRomeTitle)`
  color: #326cf9;
`;

const MonthPrice = styled(Monthly)`
  color: #326cf9;
`;

const Info = styled(Area)`
  position: relative;
  width: 550px;
`;

const InfoBox = styled.div`
  position: absolute;
  width: 128px;
  height: 38px;
  top: 25px;
  left: 300px;
`;

const InfoTitle = styled.p`
  height: 20px;
  color: #222222;
  font-size: 14px;
  text-align: right;
  line-height: 20px;
`;

const InfoName = styled.p`
  height: 14px;
  color: #888888;
  font-size: 14px;
  text-align: right;
`;

const Contact = styled.button`
  position: absolute;
  width: 114px;
  height: 36px;
  padding: 11px 0px 8px 10px;
  border: 1px solid #e7e7e7;
  border-radius: 19px;
  background-color: #fff;
  top: 25px;
  left: 435px;
`;

const Phone = styled.span`
  position: absolute;
  top: 36px;
  left: 451px;
`;
