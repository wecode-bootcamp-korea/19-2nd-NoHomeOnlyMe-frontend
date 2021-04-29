import React from 'react';
import styled from 'styled-components';
import CheckBox from './MapFilterComponent/CheckBox';
import Slider from './MapFilterComponent/Slider';

export default function MapFilterSub({
  subFilterType,
  setMaintenanceCost,
  setExclusiveM2,
}) {
  const subTypeTable = {
    room: <CheckBox checkList={subFilterType[0].split(',')} title={'방종류'} />,
    sale: (
      <>
        <CheckBox checkList={subFilterType[0].split('/')} title={'거래유형'} />
        <Slider
          title={'보증금/전세가'}
          unit={'만원'}
          setRange={setMaintenanceCost}
          maxMin={{ max: 100000, min: 0 }}
        />
        <Slider
          title={'월세'}
          unit={'만원'}
          setRange={setMaintenanceCost}
          maxMin={{ max: 360, min: 0 }}
        />
      </>
    ),
    maintenanceCost: (
      <Slider
        title={'관리비'}
        unit={'만원'}
        setRange={setMaintenanceCost}
        maxMin={{ max: 80, min: 0 }}
      />
    ),
    exclusiveM2: (
      <Slider
        title={'방크기(전용면적)'}
        unit={'m'}
        setRange={setExclusiveM2}
        maxMin={{ max: 150, min: 0 }}
      />
    ),
  };

  return <Container>{subTypeTable[subFilterType[1]]}</Container>;
}

const Container = styled.div`
  border: 1px solid rgb(233, 233, 233);
  position: absolute;
  top: 124px;
  margin-left: 5px;
  background-color: white;
  z-index: 1;
`;
