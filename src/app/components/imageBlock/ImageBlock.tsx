import React from 'react';

import ImageBlockStyled from './ImageBlock.styled';
import Image from '../image/Image';

export interface Props {
  className?: string;
  image: any;
  alt: string;
  path: string;
  text?: string;
  align?: 'center' | 'left' | 'right';
}

const ImageBlock = ({
  className,
  alt,
  path,
  text,
  align = 'center',
}: Props) => {
  if (!path) return null;
  return (
    <ImageBlockStyled className={className} align={align}>
      <div className="image-block__wrapper">
        <Image className="image-block__image" alt={alt} path={path} />
      </div>
      {text && <p className="image-block__text">{text}</p>}
    </ImageBlockStyled>
  );
};

export default ImageBlock;
