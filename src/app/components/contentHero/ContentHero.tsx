import React from 'react';

import ContentHeroStyled from './ContentHero.styled';
import { ImageObject } from '../image/Image';
import BackButton from '../backButton/BackButton';

export interface Props {
  className?: string;
  title: string;
  image: ImageObject;
}

const ContentHero = ({ className, title, image }: Props) => {
  if (!image) return null;
  const bgImage = image.asset.sys.uri;
  return (
    <ContentHeroStyled className={className} bgImage={bgImage}>
      <div className="content-hero__content">
        <BackButton
          uri="/landing"
          label="Landing page"
          className="content-hero__back-btn"
          color="#fff"
        />
        <h1 className="content-hero__title">{title}</h1>
      </div>
    </ContentHeroStyled>
  );
};

export default ContentHero;
