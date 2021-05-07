import React, { useState, useEffect, useRef } from 'react';
import { CustomOverlay } from './CustomOverlay';
import { API } from '../../Utils/config';

const { naver } = window;

export default function Map({
  center,
  zoom,
  roomList,
  subwayList,
  univList,
  getInitData,
  getData,
  getRoomListData,
}) {
  const [map, setMap] = useState(null);
  const markersRef = useRef([]);
  const mapRef = useRef();

  useEffect(() => {
    const map = mapRef.current;
    const mapObj = new naver.maps.Map(map);

    naver.maps.Event.addListener(mapObj, 'dragend', function () {
      getData(mapObj.center._lat, mapObj.center._lng, zoom);
    });

    window.naver.maps.Event.addListener(
      map,
      'zoom_changed',
      function (changed_zoom) {
        getData(mapObj.center._lat, mapObj.center._lng, changed_zoom);
      }
    );

    setMap(mapObj);
    getInitData();
  }, []);

  const createMarker = arr => {
    const createdMarkers = arr.map(
      ({ latitude, longitude, name, type, room_id }) => {
        const position = new naver.maps.LatLng(latitude, longitude);
        let count = 0;
        if (room_id) {
          count = room_id.length;
        }

        return new CustomOverlay({
          map,
          position,
          name,
          type,
          count,
          room_id,
          getRoomListData,
        });
      }
    );
    markersRef.current.push(createdMarkers);
  };

  const deleteMarker = () => {
    markersRef.current.forEach(markerlist =>
      markerlist.forEach(marker => marker && marker.setMap(null))
    );
    markersRef.current = [];
  };

  useEffect(() => {
    // if (!map && !roomList.length) return;
    if (!map) return;
    if (markersRef.current.length) {
      deleteMarker();
    }
    console.log(roomList, subwayList, univList);

    // name, type
    if (roomList)
      createMarker(
        roomList.map(el => {
          return { ...el, type: 'room' };
        })
      );
    if (subwayList)
      createMarker(
        subwayList.map(el => {
          return { ...el, type: 'subway' };
        })
      );

    if (univList)
      createMarker(
        univList.map(el => {
          return { ...el, type: 'univ' };
        })
      );
  }, [map, roomList, subwayList, univList]);

  return (
    <div>
      <div
        style={{ width: '79.3%', height: '86.7vh', position: 'absolute' }}
        id="naver"
        ref={mapRef}
      />
    </div>
  );
}

// import React, { useRef, useEffect } from 'react';
// import styled from 'styled-components';
// import { debounce } from 'lodash';

// function Map({
//   center,
//   zoom,
//   roomList,
//   subwayList,
//   univList,
//   markerRefList,
//   getMapData,
// }) {
//   const mapRef = useRef();

//   const initMap = () => {
//     var CustomOverlay = function (options) {
//       this._element = markerRefList[options.idx];

//       this.setPosition(options.position);
//       this.setMap(options.map || null);
//     };

//     CustomOverlay.prototype = new window.naver.maps.OverlayView();
//     CustomOverlay.prototype.constructor = CustomOverlay;

//     CustomOverlay.prototype.setPosition = function (position) {
//       this._position = position;
//       this.draw();
//     };

//     CustomOverlay.prototype.getPosition = function () {
//       return this._position;
//     };

//     CustomOverlay.prototype.onAdd = function () {
//       var overlayLayer = this.getPanes().overlayLayer;
//       overlayLayer.append(this._element);
//     };

//     CustomOverlay.prototype.draw = function () {
//       if (!this.getMap()) {
//         return;
//       }
//       var projection = this.getProjection(),
//         position = this.getPosition(),
//         pixelPosition = projection.fromCoordToOffset(position);

//       this._element.style.left = `${pixelPosition.x}px`;
//       this._element.style.top = `${pixelPosition.y}px`;
//     };

//     let centerPosition = new window.naver.maps.LatLng(
//       center.latitude,
//       center.longitude
//     );

//     const map = new window.naver.maps.Map(mapRef.current, {
//       center: centerPosition,
//       zoom: zoom,
//     });

//     for (let i = 0; i < markerRefList.length; i++) {
//       let position;
//       if (i < roomList.length) {
//         position = new window.naver.maps.LatLng(
//           roomList[i].latitude,
//           roomList[i].longitude
//         );
//       } else if (
//         roomList.length <= i &&
//         i < roomList.length + subwayList.length
//       ) {
//         position = new window.naver.maps.LatLng(
//           subwayList[i - roomList.length].latitude,
//           subwayList[i - roomList.length].longitude
//         );
//       } else {
//         position = new window.naver.maps.LatLng(
//           univList[i - (roomList.length + subwayList.length)].latitude,
//           univList[i - (roomList.length + subwayList.length)].longitude
//         );
//       }

//       new CustomOverlay({
//         map: map,
//         position: position,
//         idx: i,
//       });
//     }

//     window.naver.maps.Event.addListener(map, 'dragend', function () {
//       // getMapData(map.center._lat, map.center._lng, zoom);
//     });

//     window.naver.maps.Event.addListener(map, 'zoom_changed', function () {
//       // getMapData(map.center._lat, map.center._lng, zoom);
//     });
//   };

//   useEffect(() => {
//     initMap();
//   }, [univList]);

//   return <MapComponent ref={mapRef}></MapComponent>;
// }

// export default Map;

// const MapComponent = styled.div`
//   display: inline-block;
//   width: 79.3%;
//   height: 86.7vh;
//   border: 1px solid gray;
// `;
