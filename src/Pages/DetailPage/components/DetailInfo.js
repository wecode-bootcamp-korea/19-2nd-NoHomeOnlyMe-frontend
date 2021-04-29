import styled from 'styled-components';

function DetailInfo({ info }) {
  const infoItemList = [
    ['해당층/건물층', `${info.floor}층${info.building_story}층`],
    ['전용/공급면적', `${info.exclusive_m2}㎡ ${info.supply_m2}㎡`],
    ['난방종류', `${info.heating_type}`],
    ['건물 주차수', `${info.parking ? '주차가능' : '주차불가능'}`],
    ['엘리베이터', `${info.elevator ? '있음' : '없음'}`],
    ['반려동물', `${info.pet ? '가능' : '불가능'}`],
    ['입주가능일', `${info.move_in_date}`],
    ['주용도', `${info.house_type}`],
  ];

  return (
    <InfoWrapper>
      <Confirm>
        <ConfirmTitle>확인매물</ConfirmTitle>
        <ConfirmText>
          방주인과 공인중개사가 거래정보를 확인한 매물입니다.
        </ConfirmText>
      </Confirm>
      <InfoBox>
        {infoItemList.map((info, idx) => {
          return (
            <InfoItem key={idx}>
              <Point>.</Point>
              <Name>{info[0]}</Name>
              <Value>{info[1]}</Value>
            </InfoItem>
          );
        })}
      </InfoBox>
    </InfoWrapper>
  );
}

export default DetailInfo;

const InfoWrapper = styled.div``;

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
  width: 1046px;
  height: 36px;
  padding: 13px 0px 0px 30px;
  color: #fff;
  background-color: #3665ce;
  font-size: 12px;
  font-weight: 500;
`;

const InfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 295px;
  height: 49px;
  border-bottom: 1px solid #ebebeb;
`;

const Point = styled.div`
  display: inline-block;
  width: 7px;
  padding-bottom: 5px;
`;

const Name = styled.p`
  width: 95px;
  height: 49px;
  color: ${props => props.theme.infoName};
  font-size: 14px;
  line-height: 49px;
`;

const Value = styled(Name)`
  width: 193px;
  color: #222223;
`;
