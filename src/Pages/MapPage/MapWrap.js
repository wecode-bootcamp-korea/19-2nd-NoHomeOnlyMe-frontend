import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Map from './Map';
import MapCircle from './MapCircle';
import MapNav from './MapNav';
import MapSearch from './MapSearch';
import MapFilter from './MapFilter';
import MapList from './MapList';
import { API } from '../../Utils/config';

function MapWrap() {
  const [center, setCenter] = useState({});
  const [zoom, setZoom] = useState(0);
  const [roomList, setRoomList] = useState([]);
  const [subwayList, setSubwayList] = useState([]);
  const [univList, setUnivList] = useState([]);
  const [maintenanceCost, setMaintenanceCost] = useState({ min: 0, max: 70 });
  const [exclusiveM2, setExclusiveM2] = useState({ min: 0, max: 150 });
  const [filterBox, setFilterBox] = useState(false);
  const [search, setSearch] = useState('');
  const [roomIdList, setRoomIdList] = useState([]);

  const getInitData = () => {
    fetch(`${API}/search/map`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  };

  const getMapData = (lat, lng, zoom) => {
    fetch(`${API}/search/map`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  };

  const getMapDataMaintenanceCost = () => {
    fetch(
      `${API}/search/map?center=${center.latitude},${center.longitude}&zoom=${zoom}&maintenance_cost=${maintenanceCost.min},${maintenanceCost.max}`
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  };

  const getMapDataSearch = str => {
    fetch(
      `${API}/search/map?center=${center.latitude},${center.longitude}&zoom=${zoom}&search=${str}`
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  };

  const getMapDataExclusiveM2 = () => {
    fetch(
      `${API}/search/map?center=${center.latitude},${center.longitude}&zoom=${zoom}&exclusive_m2=${exclusiveM2.min},${exclusiveM2.max}`
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  };

  const getRoomListData = room_id_str => {
    fetch(`${API}/search/room?room_id=${room_id_str}`)
      .then(res => res.json())
      .then(data => {
        setRoomIdList(data.results);
      });
  };

  useEffect(() => {
    if (center && zoom) getMapDataMaintenanceCost();
  }, [maintenanceCost]);

  useEffect(() => {
    if (center && zoom) getMapDataExclusiveM2();
  }, [exclusiveM2]);

  const setData = data => {
    setCenter(data.center);
    setZoom(data.zoom);
    setRoomList(data.room_list);
    setSubwayList(data.subway_list);
    setUnivList(data.univ_list);
  };

  return (
    <div>
      <MapNav setFilterBox={setFilterBox} />
      <MapHeader>
        <MapSearch
          getMapData={getMapData}
          setSearch={setSearch}
          setFilterBox={setFilterBox}
          getMapDataSearch={getMapDataSearch}
        />
        <MapFilter
          setMaintenanceCost={setMaintenanceCost}
          setExclusiveM2={setExclusiveM2}
          filterBox={filterBox}
          setFilterBox={setFilterBox}
        />
      </MapHeader>

      <MapContent onClick={() => setFilterBox(false)}>
        <MapList roomIdList={roomIdList} />
        <Map
          center={center}
          zoom={zoom}
          roomList={roomList}
          subwayList={subwayList}
          univList={univList}
          getInitData={getInitData}
          getData={getMapData}
          getRoomListData={getRoomListData}
        />
      </MapContent>
    </div>
  );
}
export default MapWrap;

const MapHeader = styled.div`
  display: flex;
`;

const MapContent = styled.div`
  display: flex;
`;
