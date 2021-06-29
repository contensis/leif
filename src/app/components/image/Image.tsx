import React from 'react';

import cropImage from '../../utils/cropImage';
import ImageStyled from './Image.styled';
interface Props {
  className?: string;
  path: string;
  alt: string;
  crop?: boolean;
  height?: number;
  width?: number;
}

const Image = ({ className, path, alt, crop = true, height, width }: Props) => {
  if (!path) return null;

  let src: string = cropImage(path, width, height, crop);
  src = src.toLowerCase().includes('bridget') ? src + '&clearCache=true' : src;
  src = src.indexOf('?') > -1 ? `${src}&format=webp` : `${src}?format=webp`;

  return <ImageStyled src={src} alt={alt} className={className} />;
};

export default Image;
