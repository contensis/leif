import React from 'react';

import HeroContent from '../heroContent/HeroContent';
import Image from '../image/Image';

import LandingHeroStyled from './LandingHero.styled';

export interface Props {
  className?: string;
  imageUri: string;
  imageAlt: string;
  title: string;
  summary: string;
  ctaLink: string;
  ctaText: string;
}

const LandingHero = ({
  className,
  imageUri,
  imageAlt,
  title,
  summary,
  ctaLink,
  ctaText,
}: Props) => {
  return (
    <LandingHeroStyled className={className}>
      <div className="image-hero__image-wrapper">
        <Image className="image-hero__image" path={imageUri} alt={imageAlt} />
        <div className="image-hero__image-overlay" />
      </div>
      <div className="image-hero__content">
        <HeroContent
          title={title}
          summary={summary}
          ctaLink={ctaLink}
          ctaText={ctaText}
          btnIcon="arrow-right"
        />
      </div>
    </LandingHeroStyled>
  );
};

export default LandingHero;
