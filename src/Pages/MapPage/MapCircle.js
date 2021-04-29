import React from 'react';
import styled from 'styled-components';

class MapCircle extends React.Component {
  makeLeft = number => {
    if (typeof number !== 'number') return 0;

    if (number < 10) return 0;
    else if (number >= 10 && number < 100) return 5;
    else return 12;
  };

  render() {
    const { count, name, type, position, getRoomIdList } = this.props;

    const colorTable = {
      room: ['white', '#326cf9', '#326cf9', '#326cf9', 'white', '#326cf9'],
      subway: ['#1ba885', 'white', '#1ba885', 'white', '#1ba885', '#1ba885'],
      univ: ['#8782ea', 'white', '#8782ea', 'white', '#8782ea', '#8782ea'],
    };

    const typeTable = {
      room: count,
      subway: <i className="fas fa-subway" />,
      univ: <i className="fas fa-university" />,
    };

    const cicleClick = type => {
      if (type === 'room') {
        getRoomIdList(position.room_id.slice(0, 10).join(','));
      }
    };

    return (
      <CircleBox ref={this.props.innerRef} onClick={() => cicleClick(type)}>
        <Count
          left={name && name.length * 12 + 42 + this.makeLeft(typeTable[type])}
          type={type}
          colorTable={colorTable}
        >
          {typeTable[type]}
        </Count>

        <Area type={type} colorTable={colorTable}>
          {name}
        </Area>
      </CircleBox>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <MapCircle innerRef={ref} {...props} />
));

const CircleBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  position: absolute;
  cursor: pointer;
  font-size: 12px;
`;

const Count = styled.h1`
  position: relative;
  left: ${({ left }) => `-${left}px`};
  height: 25px;
  padding: 0 8px;
  color: ${({ type, colorTable }) => colorTable[type][0]};
  background-color: ${({ type, colorTable }) => colorTable[type][1]};
  border: 1px solid ${({ type, colorTable }) => colorTable[type][2]};
  border-radius: 50px;
  text-align: center;
  line-height: 25px;
  font-weight: bold;
`;

const Area = styled.p`
  position: relative;
  height: 25px;
  padding: 0 10px 0 30px;
  color: ${({ type, colorTable }) => colorTable[type][3]};
  background-color: ${({ type, colorTable }) => colorTable[type][4]};
  border: 1px solid ${({ type, colorTable }) => colorTable[type][5]};
  border-radius: 30px;
  text-align: center;
  line-height: 25px;
`;
