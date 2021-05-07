import React, { useState } from 'react';
import styled from 'styled-components';

function DetailHeader({ header }) {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <HeaderWrapper>
      <OneRoom>
        <OneRomeTitle>{header.room_type}</OneRomeTitle>
        <Monthly>
          {header.sale_type} {header.deposit}
        </Monthly>
        <Price>만원</Price>
      </OneRoom>
      <Area>
        <AreaTitle>전용면적</AreaTitle>
        {click ? (
          <ExclusiveArea>{header.exclusive_m2}㎡</ExclusiveArea>
        ) : (
          <ExclusiveArea>{header.exclusive_pyeong}평</ExclusiveArea>
        )}

        <Pyeong onClick={handleClick}>
          <Content>{click ? '평' : '㎡'}</Content>
        </Pyeong>
      </Area>
      <Dwelling>
        <DwellingTitle>한달 예상 주거비</DwellingTitle>
        <MonthPrice>{header.month_total_cost}만원 + α</MonthPrice>
      </Dwelling>
      <Info>
        <InfoBox>
          <InfoTitle>삼성공인중개사사무소</InfoTitle>
          <InfoName>{header.user_name}</InfoName>
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
  width: 1180px;
  height: 107px;
  padding-top: 35px;
  margin-bottom: 35px;
`;
const OneRoom = styled.div`
  width: 220px;
  height: 72px;
`;
const OneRomeTitle = styled.p`
  margin: 5px 0px 5px 0px;
  color: ${props => props.theme.detailHeaderTitle};
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
  color: ${props => props.theme.detailHeaderTitle};
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
const Dwelling = styled(Area)`
  margin-right: 20px;
`;
const DwellingTitle = styled(OneRomeTitle)`
  color: ${props => props.theme.detailHeaderMonth};
`;
const MonthPrice = styled(Monthly)`
  width: 185px;
  margin-right: 200px;
  color: ${props => props.theme.detailHeaderMonth};
`;
const Info = styled(Area)`
  position: relative;
  width: 625px;
`;
const InfoBox = styled.div`
  position: absolute;
  width: 128px;
  height: 38px;
  top: 25px;
  left: 300px;
`;
const InfoTitle = styled.p`
  width: 146px;
  height: 20px;
  position: relative;
  left: -18px;
  font-size: 14px;
  text-align: right;
  line-height: 20px;
`;
const InfoName = styled.p`
  height: 14px;
  color: ${props => props.theme.detailHeaderTitle};
  font-size: 14px;
  text-align: right;
`;
const Contact = styled.button`
  position: absolute;
  width: 114px;
  height: 36px;
  padding: 11px 0px 8px 15px;
  border: 1px solid #e7e7e7;
  border-radius: 19px;
  background-color: #fff;
  line-height: 16px;
  top: 25px;
  left: 435px;
`;
const Phone = styled.span`
  position: absolute;
  top: 36px;
  left: 451px;

  & > i {
    margin-left: -5px;
  }
`;
