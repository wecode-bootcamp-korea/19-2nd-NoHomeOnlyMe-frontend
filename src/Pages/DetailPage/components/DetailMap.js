import React, { useEffect } from 'react';
import styled from 'styled-components';

function DetailMap() {
  useEffect(() => {
    initMap();
  }, []);

  const initMap = () => {
    let mapOptions = {
      center: new window.naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 9,
    };
    new window.naver.maps.Map('map', mapOptions);
  };

  return <Map id="map"></Map>;
}

export default DetailMap;

const Map = styled.div`
  width: 850px;
  height: 400px;
`;
