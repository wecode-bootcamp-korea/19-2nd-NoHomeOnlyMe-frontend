import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function MapList({ roomIdList }) {
  const imageList = [
    'http://d1774jszgerdmk.cloudfront.net/512/722531b5-ad51-43ed-8e75-414c2b98f98a',
    'http://d1774jszgerdmk.cloudfront.net/512/190be9c0-6a59-43b0-b9dd-126e6fa9b78d',
    'http://d1774jszgerdmk.cloudfront.net/512/307819ed-0a18-4f1b-a935-e50266867d34',
    'http://d1774jszgerdmk.cloudfront.net/512/f8f96a16-9d4d-4085-ba9b-1e120f334d93',
    'http://d1774jszgerdmk.cloudfront.net/512/0d8893df-e61d-4f3a-9264-6b6489622fa0',
    'http://d1774jszgerdmk.cloudfront.net/512/0d8893df-e61d-4f3a-9264-6b6489622fa0',
    'http://d1774jszgerdmk.cloudfront.net/512/eddead17-9ea6-4875-8c16-103171593e20-2',
    'http://d1774jszgerdmk.cloudfront.net/512/ec70a18f-1e1b-4949-b978-9db79606d101',
    'http://d1774jszgerdmk.cloudfront.net/512/c0c68643-bf27-47f2-8932-5ef2d5e0a160',
    'http://d1774jszgerdmk.cloudfront.net/512/e3e6cd82-7419-4554-8616-bfc9c20a46ba',
    'http://d1774jszgerdmk.cloudfront.net/512/3b9ad422-6634-45eb-af1c-d99644e298b8',
    'http://d1774jszgerdmk.cloudfront.net/512/a89bd826-24cd-4d04-bb03-913824f5fadb',
    'http://d1774jszgerdmk.cloudfront.net/512/962f1807-52f0-42ff-849d-52824b54d179',
    'http://d1774jszgerdmk.cloudfront.net/512/b7e7c39f-8878-465d-a965-95d0e8931dac',
  ];

  const makeImage = () => {
    return imageList[Math.round(Math.random() * (imageList.length - 1))];
  };

  return (
    <Container>
      <div className="roomListHeader"></div>
      <RoomList>
        {roomIdList.map(room => {
          const {
            id,
            sale_type,
            deposit,
            exclusive_m2,
            maintenance_cost,
            room_type,
          } = room;

          return (
            <Room key={id}>
              <img src={makeImage()} alt="room" />
              <RoomInfo>
                <h1>
                  {sale_type} {(deposit + '').slice(0, 2) / 10}억
                </h1>
                <RoomCount>{room_type} 이상</RoomCount>
                <p>
                  3층, {exclusive_m2}m, 관리비
                  {(maintenance_cost + '').slice(0, 1)}만
                </p>
                <p>가격대비최고 깔끔하고 넓은 {room_type}..</p>
              </RoomInfo>
            </Room>
          );
        })}
      </RoomList>
    </Container>
  );
}

const Container = styled.article`
  width: 370px;
  height: 86.7vh;

  overflow-y: scroll;
`;

const RoomList = styled.ul`
  &::-webkit-scrollbar {
    width: 10px;
    overflow-y: scroll;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const Room = styled.li`
  display: flex;
  padding: 16px 15px;
  border-top: 1px solid rgb(233, 233, 233);

  & > img {
    width: 124px;
    height: 124px;
    margin-right: 20px;
  }
`;

const RoomInfo = styled.div`
  width: 189px;
  color: #222;
  font-size: 14px;
  font-weight: 200;
  line-height: 20px;

  & > h1 {
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: bold;
  }
`;

const RoomCount = styled.p`
  margin-bottom: 8px;
  font-size: 13px;
`;
