import React from 'react';

import cropImage from '~/utils/cropImage';
import ImageStyled from './Image.styled';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {object} props.image
 * @param {boolean} props.crop
 * @param {number} props.height
 * @param {number} props.width
 */

const Image = ({ className, image, crop = true, height, width }) => {
  if (!image || !image.asset || !image.asset.sys) {
    return null;
  }

  let src = cropImage(image.asset.sys.uri, width, height, crop);

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
