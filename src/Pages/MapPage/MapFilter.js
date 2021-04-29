import React, { useState } from 'react';
import styled from 'styled-components';
import CheckBox from './MapFilterComponent/CheckBox';
import Slider from './MapFilterComponent/Slider';

export default function MapFilter({
  setMaintenanceCost,
  setExclusiveM2,
  filterBox,
  setFilterBox,
}) {
  const [currentSubFilter, setCurrentSubFilter] = useState(0);

  const filterList = [
    ['원룸, 투 쓰리룸, 오피스텔', 'room'],
    ['월세 / 전세 / 매매', 'sale'],
    ['관리비', 'maintenanceCost'],
    ['방크기', 'exclusiveM2'],
  ];

  const clickFilter = idx => {
    setCurrentSubFilter(idx);
    setFilterBox(currentSubFilter === idx ? !filterBox : true);
  };

  const subTypeTable = {
    room: (
      <CheckBox
        checkList={filterList[currentSubFilter][0].split(',')}
        title={'방종류'}
      />
    ),
    sale: (
      <Sale>
        <CheckBox
          checkList={filterList[currentSubFilter][0].split('/')}
          title={'거래유형'}
        />
        <Slider
          title={'보증금/전세가'}
          unit={'만원'}
          step={500}
          setRange={setMaintenanceCost}
          maxMin={{ max: 100000, min: 0 }}
        />
        <Slider
          title={'월세'}
          unit={'만원'}
          step={1}
          setRange={setMaintenanceCost}
          maxMin={{ max: 360, min: 0 }}
        />
      </Sale>
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

  return (
    <FilterListBox>
      {filterList.map((filter, idx) => {
        return (
          <div key={idx}>
            <FilterList
              onClick={() => clickFilter(idx)}
              filterBox={filterBox}
              idx={idx}
              currentSubFilter={currentSubFilter}
            >
              <Title
                filterBox={filterBox}
                idx={idx}
                currentSubFilter={currentSubFilter}
              >
                {filter[0]}
              </Title>
              <ArrowIcon
                className="fas fa-chevron-down"
                filterBox={filterBox}
              />
            </FilterList>
            {filterBox && (
              <Container>
                {filterList[currentSubFilter][1] ===
                  Object.keys(subTypeTable)[idx] &&
                  subTypeTable[filterList[currentSubFilter][1]]}
              </Container>
            )}
          </div>
        );
      })}
    </FilterListBox>
  );
}

const Container = styled.div`
  border: 1px solid rgb(233, 233, 233);
  position: absolute;
  margin-left: 5px;
  background-color: white;
  z-index: 1;
`;

const Sale = styled.div`
  border: 1px solid rgb(233, 233, 233);
  background-color: white;
  position: relative;
`;

const FilterListBox = styled.div`
  display: flex;
  padding: 0 10px;
`;

const FilterList = styled.button`
  display: inline-block;
  margin: 10px 5px;
  padding: 10px;
  border: ${props =>
    props.idx === props.currentSubFilter && props.filterBox
      ? '1px solid rgb(50, 108, 249)'
      : '1px solid rgb(243, 243, 243)'};
  line-height: 12px;
  font-size: 12px;
  cursor: pointer;
  background-color: white;

  &:hover {
    background-color: ${props =>
      props.idx === props.currentSubFilter && props.filterBox
        ? 'white'
        : 'rgb(243, 243, 243)'};
  }
`;

const Title = styled.span`
  font-weight: bold;
  font-weight: ${props =>
    props.idx === props.currentSubFilter && props.filterBox ? '400' : 'bold'};
  color: ${props =>
    props.idx === props.currentSubFilter && props.filterBox
      ? 'rgb(50, 108, 249)'
      : '#222'};
`;

const ArrowIcon = styled.i`
  padding-left: 10px;
  color: ${props =>
    props.idx === props.currentSubFilter && props.filterBox
      ? 'rgb(50, 108, 249)'
      : '#222'};
`;
