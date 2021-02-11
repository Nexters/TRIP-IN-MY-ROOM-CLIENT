import React, { FC } from 'react';
import styled from 'styled-components';
import ImageInput from './ImageInput';

const ImageListWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

interface IImageListProps {
  imageList: Array<number>;
}

const ImageList: FC<IImageListProps> = () => {
  return (
    <ImageListWrapper>
      <ImageInput />
    </ImageListWrapper>
  );
};

export default ImageList;