import React from 'react';
import GenericHero from '../genericHero/GenericHero';
import LinkButton from '../linkButton/LinkButton';
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
}

const LandingHero = ({
  className,
  imageUri,
  imageAlt,
  title,
  summary,
  ctaLink,
  ctaText,
  hasIllustration = false,
  heroIllustrationUri,
  heroIllustrationAlt,
}: Props) => {
  if (hasIllustration) {
    return (
      <GenericHero
        title={title}
        image={{ src: heroIllustrationUri || '', alt: heroIllustrationAlt }}
        cta={{ a11y: ctaLink || '', label: ctaText }}
        text={summary}
      />
    );
  }

  return (
    <LandingHeroStyled className={className} data-component="landing-hero">
      <div className="landing-hero__inner">
        <div className="landing-hero__content">
          <span className="landing-hero__rule" aria-hidden="true" />
          <h1 className="landing-hero__title">{title}</h1>
          {summary && <p className="landing-hero__summary">{summary}</p>}
          {ctaLink && (
            <LinkButton
              className="landing-hero__btn"
              icon="arrow-right"
              label={ctaText}
              path={ctaLink}
            />
          )}
        </div>
        {imageUri && (
          <img
            className="landing-hero__photo"
            src={imageUri}
            alt={imageAlt || ''}
          />
        )}
      </div>
    </LandingHeroStyled>
  );
};

export default LandingHero;
