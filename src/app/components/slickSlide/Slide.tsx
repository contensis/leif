import React from 'react';

import SlideStyled from './Slide.styled';
import Image from '../image/Image';
interface Props {
  className?: string;
  imageUri: string;
  imageAlt: string;
  hasScrollImage?: boolean;
}

const Slide = ({ className, imageUri, imageAlt, hasScrollImage }: Props) => {
  if (!imageUri) return null;

  return (
    <SlideStyled
      className={className}
      hasScrollImage={hasScrollImage}
      imageUri={imageUri}
    >
      {!hasScrollImage && (
        <Image path={imageUri} alt={imageAlt} className="slide__image" />
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
