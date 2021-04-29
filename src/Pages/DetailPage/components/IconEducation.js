import styled from 'styled-components';

function IconEducation() {
  const data = [
    {
      className: 'xi-emoticon-happy-o',
      title: '어린이집',
    },
    {
      className: 'xi-emoticon-neutral-o',
      title: '유치원',
    },
    {
      className: 'xi-emoticon-bad-o',
      title: '초등학교',
    },
    {
      className: 'xi-emoticon-devil-o',
      title: '중학교',
    },
    {
      className: 'xi-emoticon-cool-o',
      title: '고등학교',
    },
  ];

  return (
    <>
      {data.map((data, idx) => {
        return (
          <Icon key={idx}>
            <IconChild className={data.className}></IconChild>
            <IconTitle>{data.title}</IconTitle>
          </Icon>
        );
      })}
    </>
  );
}

export default IconEducation;

const Icon = styled.button`
  width: 90px;
  height: 90px;
  margin-right: 5px;
  background-color: #fff;
  border: 0px;
  cursor: pointer;
`;

const IconChild = styled.div`
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
