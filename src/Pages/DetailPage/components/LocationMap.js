import DetailMap from './DetailMap';
import styled from 'styled-components';

function LocationMap({ map }) {
  return (
    <LocationWrapper>
      <LocationTitle>위치 및 주변시설</LocationTitle>
      <LocationAddress>{map.road_address}</LocationAddress>
      <MapArea>
        <DetailMap mapInfo={map} />
      </MapArea>
    </LocationWrapper>
  );
}

export default LocationMap;

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
