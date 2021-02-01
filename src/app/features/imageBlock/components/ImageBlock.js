import React from 'react';
import PropTypes from 'prop-types';

import ImageBlockStyled from '../components.styled/ImageBlock.styled';
import Image from '~/features/image';

const ImageBlock = ({ className, image, title, text }) => {
  if (!image) return null;
  return (
    <ImageBlockStyled className={className}>
      <div className="ibImageWrapper">
        <Image className="ibImage" image={image} width={840} height={480} />
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
