import React from 'react';

import ContentHeroStyled from './ContentHero.styled';
import BackButton from '../backButton/BackButton';

export interface Props {
  className?: string;
  title: string;
  imageUri: string;
  type?: 'Full width' | 'Two column' | 'Landing hero' | 'Image as background';
}

const ContentHero = ({ className, title, imageUri }: Props) => {
  if (!imageUri) return null;
  return (
    <ContentHeroStyled className={className} bgImage={imageUri}>
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
