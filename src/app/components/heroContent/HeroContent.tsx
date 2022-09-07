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
  headingLevel?: number;
}

const HeroContent = ({
  className,
  title,
  summary,
  ctaLink,
  ctaText,
  btnIcon,
  headingLevel = 2,
}: Props) => {
  if (!title) return null;
  const Heading = `h${headingLevel}`;

  return (
    <HeroContentStyled className={className}>
      <Heading className="hero-content__title">{title}</Heading>
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
