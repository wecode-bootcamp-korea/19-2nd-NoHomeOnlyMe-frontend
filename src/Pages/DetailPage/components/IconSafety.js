import styled from 'styled-components';

function IconSafety() {
  const data = [
    {
      className: 'xi-emoticon',
      title: '치안',
    },
    {
      className: 'xi-camera',
      title: 'CCTV',
    },
  ];

  return (
    <>
      {data.map((data, idx) => {
        return (
          <Icon key={idx}>
            <IconSafe className={data.className}></IconSafe>
            <IconTitle>{data.title}</IconTitle>
          </Icon>
        );
      })}
    </>
  );
}

export default IconSafety;

const Icon = styled.button`
  width: 90px;
  height: 90px;
  margin-right: 5px;
  background-color: #fff;
  border: 0px;
  cursor: pointer;
`;

const IconSafe = styled.div`
  padding: 2px;
  background-color: ${props => props.theme.mapIcon};
  color: ${props => props.theme.mapBackground};
  font-size: 65px;
  border: 0px;
  border-radius: 50%;
`;

const IconTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.infoName};
`;
