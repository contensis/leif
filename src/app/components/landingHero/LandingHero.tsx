import React from 'react';

import HeroContent from '../heroContent/HeroContent';
import Image from '../image/Image';
import { Props as LinkButtonProps } from '../linkButton/LinkButton';

import LandingHeroStyled from './LandingHero.styled';

export interface Props {
  className?: string;
  imageUri: string;
  imageAlt: string;
  title: string;
  text: string;
  cta?: LinkButtonProps;
}

const LandingHero = ({
  className,
  imageUri,
  imageAlt,
  title,
  text,
  cta,
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
          text={text}
          cta={cta}
          btnIcon="arrow-right"
        />
      </div>
    </LandingHeroStyled>
  );
};

export default LandingHero;
