import React from 'react';
import PropTypes from 'prop-types';

import ImageBlockStyled from '../components.styled/ImageBlock.styled';

const ImageBlock = ({ className, image, title, text }) => {
  if (!image) return null;
  return (
    <ImageBlockStyled className={className}>
      <div className="ibImageWrapper">
        <img
          className="ibImage"
          src={image.asset.sys.uri}
          alt={image.asset.altText}
        />
      </div>
      <p className="ibTitle">{title}</p>
      <p className="ibText">{text}</p>
    </ImageBlockStyled>
  );
};

ImageBlock.propTypes = {
  className: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default ImageBlock;
