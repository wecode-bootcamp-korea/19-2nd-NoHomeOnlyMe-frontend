import OtherCard from './OtherCard';
import styled from 'styled-components';

function DetailOtherRoom({ data }) {
  return (
    <OtherRoom>
      <OtherRoomTitle>이 중개사무소의 다른 방</OtherRoomTitle>
      <OtherRoomCard>
        {data.map(data => {
          return <OtherCard key={data.id} data={data} />;
        })}
      </OtherRoomCard>
    </OtherRoom>
  );
}

export default DetailOtherRoom;

const OtherRoom = styled.div`
  width: 1180px;
  height: 630px;
  padding: 120px 0px 120px 0px;
`;

const OtherRoomTitle = styled.h1`
  font-size: 28px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 30px;
`;

const OtherRoomCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
