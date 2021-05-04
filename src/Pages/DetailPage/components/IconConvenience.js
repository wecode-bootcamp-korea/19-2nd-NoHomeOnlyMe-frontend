import styled from 'styled-components';

function IconConvenience({ createOrClearMarkers }) {
  const data = [
    {
      key: 'subway',
      className: 'xi-subway',
      title: '지하철역',
    },
    {
      key: 'convenience_store',
      className: 'xi-convenience-store',
      title: '편의점',
    },
    {
      key: 'university',
      className: 'xi-school',
      title: '대학교',
    },
  ];

  return (
    <>
      {data.map((data, idx) => {
        const { key, className } = data;
        return (
          <Icon
            key={idx}
            onClick={() => createOrClearMarkers({ key, className })}
          >
            <IconBox className={data.className}></IconBox>
            <IconTitle>{data.title}</IconTitle>
          </Icon>
        );
      })}
    </>
  );
}

export default IconConvenience;

const Icon = styled.button`
  width: 90px;
  height: 90px;
  margin-right: 5px;
  background-color: #fff;
  border: 0px;
  cursor: pointer;
`;

const IconBox = styled.div`
  padding: 2px;
  background-color: ${props => props.theme.mapIcon};
  color: ${props => props.theme.mapBackground};
  font-size: 70px;
  border: 0px;
  border-radius: 50%;
`;

const IconTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.infoName};
`;
