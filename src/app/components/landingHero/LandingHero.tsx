import React from 'react';
import Image, { ImageObject } from '../image/Image';
import LinkButton, { Props as LinkButtonProps } from '../linkButton/LinkButton';

import LandingHeroStyled from './LandingHero.styled';

export interface Props {
  className?: string;
  image: ImageObject;
  title: string;
  text: string;
  cta?: LinkButtonProps;
}

const LandingHero = ({
  className,
  image,
  title,
  text,
  cta,
}: Props) => {
  return (
    <LandingHeroStyled className={className}>
      <div className="image-hero__image-wrapper">
        <Image className="image-hero__image" image={image} />
        <div className="image-hero__image-overlay" />
      </div>
      <div className="image-hero__content">
        <h1 className="image-hero__title">{title}</h1>
        <p className="image-hero__text">{text}</p>
        {cta && (
          <LinkButton
            className="image-hero__btn"
            href={cta.href}
            label={cta.label}
            hasArrow
          />
        )}
      </div>
    </LandingHeroStyled>
  );
};

export default LandingHero;
