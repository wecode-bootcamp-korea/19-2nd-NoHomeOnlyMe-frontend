import styled from 'styled-components';

function PhotoList({ image, changeModalOpen, changeType }) {
  const openPhotoSlide = () => {
    changeType('photoslide');
    changeModalOpen(true);
  };

  const [mainImg, ...subImgs] = image;

  return (
    <PhotoWrapper onClick={openPhotoSlide}>
      <MainPhoto src={mainImg.url} />
      <SubPhotoWrapper>
        {subImgs.map(({ url }) => (
          <SubPhoto key={url} src={url} />
        ))}
      </SubPhotoWrapper>
    </PhotoWrapper>
  );
}

export default PhotoList;

const PhotoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MainPhoto = styled.img`
  width: 620px;
  height: 420px;
`;

const SubPhotoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 560px;
  height: 420px;
`;

const SubPhoto = styled.img`
  width: 280px;
  height: 210px;
`;
