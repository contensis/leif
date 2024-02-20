import React from 'react';

import SlideStyled from './Slide.styled';
import Image from '../image/Image';
interface Props {
  className?: string;
  src: string;
  alt: string;
  hasScrollImage?: boolean;
}

const Slide = ({ className, src, alt, hasScrollImage }: Props) => {
  if (!src) return null;

  return (
    <SlideStyled
      className={className}
      hasScrollImage={hasScrollImage}
      src={src}
    >
      {!hasScrollImage && (
        <div className="slide__image-wrapper">
          {src && (
            <img
              src={src}
              alt={alt}
              className="slide__image"
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>
      )}
      {hasScrollImage && (
        <div className="slide__bg-image-wrapper">
          <div className="slide__bg-image" />
        </div>
      )}
    </SlideStyled>
  );
};

export default Slide;
