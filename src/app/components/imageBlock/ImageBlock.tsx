import React from 'react';

import ImageBlockStyled from './ImageBlock.styled';
import Image from '../image/Image';

export interface Props {
  className?: string;
  image: any;
  alt: string;
  src: string;
  text?: string;
  align?: 'center' | 'left' | 'right';
}

const ImageBlock = ({ className, alt, src, text, align = 'center' }: Props) => {
  if (!src) return null;
  return (
    <ImageBlockStyled className={className} align={align}>
      <div className="image-block__wrapper">
        <Image
          className="image-block__image"
          alt={alt}
          src={src}
          height={480}
          width={840}
        />
      </div>
      {text && <p className="image-block__text">{text}</p>}
    </ImageBlockStyled>
  );
};

export default ImageBlock;
