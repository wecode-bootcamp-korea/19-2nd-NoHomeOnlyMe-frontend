import styled from 'styled-components';

function OtherCard({ other }) {
  return (
    <Card>
      <OtherImg src={other.image} />
      <Heart>
        <i className="xi-heart-o"></i>
      </Heart>
      <RoomType>{other.room_type}</RoomType>
      <Price>{other.sale_type}</Price>
      <Price>{other.deposit}</Price>
      <Price>{other.monthly_pay}</Price>
      <RoomInfo>
        {other.floor}층 {other.exclusive_m2}㎡ {other.maintenance_cost}만
      </RoomInfo>
      <Question>{other.question}</Question>
    </Card>
  );
}

export default OtherCard;

const Card = styled.div`
  position: relative;
  width: 280px;
  height: 318px;
  margin-left: 20px;

  &:nth-child(1) {
    margin-left: 0;
  }
`;

const OtherImg = styled.img`
  width: 280px;
  height: 186px;
  object-fit: cover;
  cursor: pointer;
`;

const Heart = styled.span`
  position: absolute;
  color: #fff;
  font-size: 25px;
  top: 5px;
  left: 250px;
`;

const RoomType = styled.p`
  margin: 20px 0px 10px 0px;
  font-size: 13px;
`;

const Price = styled.p`
  display: inline-block;
  margin: 0px 3px 6px 0px;
  font-size: 20px;
  font-weight: bold;
`;

const RoomInfo = styled.p`
  margin-bottom: 2px;
  color: ${props => props.theme.infoCard};
  font-size: 14px;
`;

const Question = styled(RoomInfo)``;
