import React from 'react';

import ImageBlockStyled from './ImageBlock.styled';
import Image, { ImageObject } from '../image/Image';

export interface Props {
  className?: string;
  image: ImageObject;
  title?: string;
  text?: string;
  align?: string;
}

const ImageBlock = ({ className, image, title, text, align = "center" }:Props) => {
  if (!image) return null;
  return (
    <ImageBlockStyled className={className} align={align}>
      <div className="image-block__wrapper">
        <Image
          className="image-block__image"
          image={image}
        />
      </div>
      <p className="image-block__title">{title}</p>
      <p className="image-block__text">{text}</p>
    </ImageBlockStyled>
  );
};

export default ImageBlock;
