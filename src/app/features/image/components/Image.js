import React from 'react';
import PropTypes from 'prop-types';

import cropImage from '../utils/cropImage';

import ImageStyled from '../components.styled/Image.styled';

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

Image.propTypes = {
  image: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  crop: PropTypes.bool,
  className: PropTypes.string,
};

export default Image;
