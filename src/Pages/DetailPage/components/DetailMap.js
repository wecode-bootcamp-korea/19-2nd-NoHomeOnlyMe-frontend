import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TabWrap from './TabWrap';
import IconConvenience from './IconConvenience';

function DetailMap({ mapInfo }) {
  const { naver } = window;
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState({
    convenience_store: [],
    university: [],
    subway: [],
  });

  useEffect(() => {
    initMap();
  }, []);

  const initMap = () => {
    let mapOptions = {
      center: new naver.maps.LatLng(
        mapInfo.center.latitude,
        mapInfo.center.longitude
      ),
      zoom: 12,
    };
    const map = new naver.maps.Map('map', mapOptions);
    setMap(map);
  };

  const createOrClearMarkers = ({ className, key }) => {
    if (markers[key].length) {
      markers[key].forEach(marker => marker.setMap(null));

      setMarkers({ ...markers, [key]: [] });
    } else {
      const createdMarkers = mapInfo[key].map(location => {
        const colors = {
          convenience_store: '#faca37',
          university: '#766fe0',
          subway: '#4386d8',
        };

        return new naver.maps.Marker({
          position: new naver.maps.LatLng(
            location.latitude,
            location.longitude
          ),
          map: map,
          icon: {
            content: [
              `<div style="color:${colors[key]}; font-size:30px;"  class="${className}"></div>`,
            ].join(''),
          },
        });
      });

      setMarkers({ ...markers, [key]: createdMarkers });
    }
  };

  return (
    <>
      <Map id="map"></Map>
      <TabWrap />
      <IconWrap>
        <IconConvenience createOrClearMarkers={createOrClearMarkers} />
      </IconWrap>
    </>
  );
}

export default DetailMap;

const Map = styled.div`
  width: 850px;
  height: 400px;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 110px;
  margin-top: 15px;
`;
