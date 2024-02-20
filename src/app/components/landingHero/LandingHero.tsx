import React from 'react';
import Region from '../../layout/Region';
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
  headingLevel?: number;
}

const LandingHero = ({
  className,
  imageUri,
  title,
  summary,
  ctaLink,
  ctaText,
  hasIllustration = false,
  heroIllustrationUri,
  heroIllustrationAlt,
}: Props) => {
  const _RenderHero = (hasIllustration: boolean) => {
    if (hasIllustration) {
      return (
        <GenericHero
          title={title}
          image={{ src: heroIllustrationUri || '', alt: heroIllustrationAlt }}
          cta={{ a11y: ctaLink || '', label: ctaText }}
          text={summary}
        />
      );
    } else {
      return (
        <LandingHeroStyled className={className} src={imageUri}>
          <div className="landing-hero__content">
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
        </LandingHeroStyled>
      );
    }
  };
  return <>{_RenderHero(hasIllustration)}</>;
};

export default LandingHero;
