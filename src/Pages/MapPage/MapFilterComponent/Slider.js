import React, { useState } from 'react';
import styled from 'styled-components';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default function Slider({ title, setRange, step, maxMin, unit }) {
  const [localMin, setLocalMin] = useState(maxMin.min);
  const [localMax, setLocalMax] = useState(maxMin.max);

  const valueChange = value => {
    let { min, max } = value;
    min = Math.max(min, maxMin.min);
    max = Math.min(max, maxMin.max);

    setRange({ min, max });
  };

  const onChangeHandler = ({ min, max }) => {
    setLocalMin(Math.max(min, maxMin.min));
    setLocalMax(Math.min(max, maxMin.max));
  };

  return (
    <Container>
      <Description>
        <Title>{title}</Title>
        <Range>
          {localMin}
          {unit} ~ {localMax}
          {unit}
        </Range>
      </Description>

      <Form>
        <InputRange
          draggableTrack
          formatLabel={value => `${value} ${unit}`}
          maxValue={maxMin.max}
          minValue={maxMin.min}
          step={localMax > 3000 ? step * 2 : step}
          value={{ min: localMin, max: localMax }}
          onChange={value => {
            onChangeHandler(value);
          }}
          onChangeComplete={value => valueChange(value)}
        />
      </Form>
    </Container>
  );
}

const Container = styled.div`
  /* position: absolute; */
  width: 400px;
  height: 165px;
  background-color: white;
  border: 1px solid rgb(233, 233, 233);
`;

const Description = styled.div`
  padding: 25px 25px 0px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span``;

const Range = styled.span`
  color: rgb(50, 108, 249);
`;

const Form = styled.form`
  width: 350px;
  margin: 0 auto;
  padding: 25px;
`;
