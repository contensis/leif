import React from 'react';

import ImageBlockStyled from './ImageBlock.styled';
import Image from '../image/Image';

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
      <div className="image-block__wrapper">
        <Image
          className="image-block__image"
          image={image}
          width={840}
          height={480}
        />
      </div>
      <p className="image-block__title">{title}</p>
      <p className="image-block__text">{text}</p>
    </ImageBlockStyled>
  );
};

export default ImageBlock;
