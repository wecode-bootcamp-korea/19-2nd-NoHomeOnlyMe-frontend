import DetailHeader from './components/DetailHeader';
import DetailInfo from './components/DetailInfo';
import DetailOtherRoom from './components/DetailOtherRoom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Detail() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/Card.json')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <Wrapper>
      <DetailHeader />
      <DetailInfo />
      <DetailOtherRoom key={data.id} data={data} />
    </Wrapper>
  );
}

export default Detail;

const Wrapper = styled.div`
  width: 1180px;
  height: auto;
  margin: 0 auto;
  border: 1px solid red;
`;
