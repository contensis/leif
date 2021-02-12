import React from 'react';

import cropImage from '../..//utils/cropImage';
import ImageStyled from './Image.styled';
export interface ImageObject {
  altText: string;
  caption: string;
  asset: {
    entryTitle: string;
    altText: string;
    sys: {
      uri: string;
    }
  }
}
interface Props {
  className?: string;
  image: ImageObject;
  crop?: boolean;
  height?: number;
  width?: number;
}

const Image = ({ className, image, crop = true, height, width }: Props) => {
  if (!image || !image.asset || !image.asset.sys) {
    return null;
  }

  let src: string = cropImage(image.asset.sys.uri, width, height, crop);

  const altText = image.altText
    ? image.altText
    : image.caption
    ? image.caption
    : image.asset.altText
    ? image.asset.altText
    : image.asset.entryTitle;

  src = src.toLowerCase().includes('bridget') ? src + '&clearCache=true' : src;

  return <ImageStyled src={src} alt={altText} className={className} />;
};

export default Image;
