import styled from 'styled-components';

function IconConvenience() {
  const data = [
    {
      className: 'xi-subway',
      title: '지하철역',
    },
    {
      className: 'xi-convenience-store',
      title: '편의점',
    },
    {
      className: 'xi-cafe',
      title: '카페',
    },
    {
      className: 'xi-bank',
      title: '은행',
    },
    {
      className: 'xi-home-o',
      title: '관공서',
    },
  ];
  return (
    <>
      {data.map((data, idx) => {
        return (
          <Icon key={idx}>
            <IconSubway className={data.className}></IconSubway>
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

const IconSubway = styled.div`
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
