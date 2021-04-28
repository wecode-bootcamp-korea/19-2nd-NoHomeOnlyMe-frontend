import styled from 'styled-components';

function OtherCard({ data }) {
  console.log(data);
  return (
    <Card>
      <OtherImg src={data.image}></OtherImg>
      <Heart>
        <i className="xi-heart-o"></i>
      </Heart>
      <RoomType>{data.roomtype}</RoomType>
      <Price>{data.price}</Price>
      <RoomInfo>{data.info}</RoomInfo>
      <Question>{data.question}</Question>
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
  margin-bottom: 6px;
  font-size: 20px;
  font-weight: bold;
`;

const RoomInfo = styled.p`
  margin-bottom: 2px;
  color: #c2c2c2;
  font-size: 14px;
`;

const Question = styled(RoomInfo)``;
