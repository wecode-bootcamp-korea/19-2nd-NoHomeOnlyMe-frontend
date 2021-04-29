import React, { useState } from 'react';
import IconConvenience from './IconConvenience';
import IconSafety from './IconSafety';
import IconEducation from './IconEducation';
import DetailMap from './DetailMap';
import TabWrap from './TabWrap';
import styled from 'styled-components';

function LocationMap() {
  const [currentId, setCurrentId] = useState(1);

  const clickMenu = id => {
    setCurrentId(id);
  };

  return (
    <LocationWrapper>
      <LocationTitle>위치 및 주변시설</LocationTitle>
      <LocationAddress>경기도 부천시 역곡동</LocationAddress>
      <MapArea>
        <DetailMap />
      </MapArea>
      <TabWrap clickMenu={clickMenu} />
      <IconWrap>{changeIcon[currentId]}</IconWrap>
    </LocationWrapper>
  );
}

export default LocationMap;

const changeIcon = {
  1: <IconConvenience />,
  2: <IconSafety />,
  3: <IconEducation />,
};

const LocationWrapper = styled.div`
  width: 1180px;
  height: 900px;
  padding: 120px 0px 120px 0px;
`;

const LocationTitle = styled.p`
  height: 41px;
  font-size: 28px;
  font-weight: 400;
  text-align: center;
  line-height: 41px;
`;

const LocationAddress = styled.p`
  height: 23px;
  margin: 3px 0px 29px;
  color: ${props => props.theme.infoName};
  font-size: 15px;
  line-height: 22px;
  text-align: center;
`;

const MapArea = styled.div`
  width: 850px;
  height: 400px;
  margin: 0 auto;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 110px;
  margin-top: 15px;
`;
