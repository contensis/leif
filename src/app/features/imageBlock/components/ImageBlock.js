import React from 'react';

import ImageBlockStyled from '../components.styled/ImageBlock.styled';
import Image from '~/features/image';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {object} props.image
 * @param {string} props.title
 * @param {string} props.text
 */

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

export default ImageBlock;
