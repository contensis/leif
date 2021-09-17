import React from 'react';

import HeroContent from '../heroContent/HeroContent';
import Image from '../image/Image';
import Region from '../../layout/Region';
import GenericHero from '../genericHero/GenericHero';
import LandingHeroStyled from './LandingHero.styled';

export interface Props {
  className?: string;
  imageUri?: string;
  imageAlt?: string;
  title: string;
  summary?: string;
  ctaLink?: string;
  ctaText?: string;
  hasIllustration?: boolean;
  heroIllustrationUri?: string;
  heroIllustrationAlt?: string;
  headingLevel?: number;
}

const LandingHero = ({
  className,
  imageUri,
  imageAlt,
  title,
  summary,
  ctaLink,
  ctaText,
  hasIllustration,
  heroIllustrationUri,
  heroIllustrationAlt,
  headingLevel = 1,
}: Props) => {
  const _RenderHero = (hasIllustration: boolean) => {
    switch (hasIllustration) {
      case true:
        return (
          <Region margin="none" width="default" padding="default">
            <GenericHero
              title={title}
              imageUri={heroIllustrationUri}
              imageAlt={heroIllustrationAlt}
              ctaLink={ctaLink}
              ctaText={ctaText}
              text={summary}
            />
          </Region>
        );
      case false:
      default:
        return (
          <LandingHeroStyled className={className}>
            <div className="image-hero__image-wrapper">
              <Image
                className="image-hero__image"
                src={imageUri}
                alt={imageAlt}
                layout="fill"
                objectFit="cover"
                quality={80}
              />
              <div className="image-hero__image-overlay" />
            </div>
            <div className="image-hero__content">
              <HeroContent
                title={title}
                summary={summary}
                ctaLink={ctaLink}
                ctaText={ctaText}
                headingLevel={headingLevel}
                btnIcon="arrow-right"
              />
            </div>
          </LandingHeroStyled>
        );
    }
  };
  return <>{_RenderHero(hasIllustration)}</>;
};

export default LandingHero;
