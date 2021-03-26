import React from 'react';

import LinkButton from '../linkButton/LinkButton';
import HeroContentStyled from './HeroContent.styled';

interface Props {
  className?: string;
  title: string;
  summary?: string;
  ctaLink?: string;
  ctaText?: string;
  btnIcon?: string;
}

const HeroContent = ({
  className,
  title,
  summary,
  ctaLink,
  ctaText,
  btnIcon,
}: Props) => {
  return (
    <HeroContentStyled className={className}>
      <h2 className="hero-content__title">{title}</h2>
      {summary && <p className="hero-content__summary">{summary}</p>}
      {ctaLink && (
        <LinkButton
          className="hero-content__btn"
          icon={btnIcon}
          label={ctaText}
          href={ctaLink}
        />
      )}
    </HeroContentStyled>
  );
};

export default HeroContent;
