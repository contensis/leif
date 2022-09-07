import React from 'react';

import ContentHeroStyled from './ContentHero.styled';
import BackButton, { AncestorsProps } from '../backButton/BackButton';
import Region from '../../layout/Region';
import GenericHero from '../genericHero/GenericHero';

export interface Props {
  className?: string;
  title?: string;
  bgImageUri?: string;
  heroIllustrationUri?: string;
  heroIllustrationAlt?: string;
  hasIllustration?: boolean;
  isFullWidth?: boolean;
  ancestors?: AncestorsProps[];
}

const ContentHero = ({
  className,
  hasIllustration = false,
  title,
  bgImageUri,
  heroIllustrationUri,
  heroIllustrationAlt,
  isFullWidth,
  ancestors,
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
              type={isFullWidth ? 'Full width' : 'Two column'}
              ancestors={ancestors}
            />
          </Region>
        );
      case false:
      default:
        return (
          <Region
            margin="none"
            width={bgImageUri ? 'full' : 'default'}
            padding={bgImageUri ? 'none' : 'default'}
          >
            <ContentHeroStyled className={className} bgImageUri={bgImageUri}>
              <div className="content-hero__content">
                <BackButton
                  ancestors={ancestors}
                  className="content-hero__back-btn"
                  color={bgImageUri ? '#fff' : '#6E729B'}
                />
                <h1 className="content-hero__title">{title}</h1>
              </div>
            </ContentHeroStyled>
          </Region>
        );
    }
  };
  return <>{_RenderHero(hasIllustration)}</>;
};

export default ContentHero;
