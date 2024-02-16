import React from 'react';
import ImageBlockStyled from './ImageBlock.styled';

export interface Props {
  className?: string;
  image: any;
  alt: string;
  src: string;
  caption?: string;
  align?: 'center' | 'left' | 'right';
}

const ImageBlock = ({
  className,
  alt,
  src,
  caption,
  align = 'center',
}: Props) => {
  if (!src) return null;
  return (
    <ImageBlockStyled
      className={className}
      data-alignment={align}
      data-component="image-block"
      style={{
        textAlign: align,
      }}
    >
      <figure className="image-block__wrapper">
        <img
          className="image-block__image"
          src={src}
          alt={alt}
          height={480}
          width={840}
          loading="lazy"
        />
        {caption && (
          <figcaption className="image-block__text">{caption}</figcaption>
        )}
      </figure>
    </ImageBlockStyled>
  );
};

export default ImageBlock;
