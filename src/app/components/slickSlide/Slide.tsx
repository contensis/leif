import React from 'react';

import SlideStyled from './Slide.styled';
import Image, { ImageObject } from '../image/Image';

interface Props {
  className?: string;
  image: ImageObject;
}

const Slide: React.FC<Props> = ({ className, image }) => {
  if (!image) return null;

  return (
    <SlideStyled className={className}>
      <Image image={image} />
    </SlideStyled>
  );
};

export default Slide;
