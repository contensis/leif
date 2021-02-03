import React from 'react';

import CTABannerStyled from './CTABanner.styled';
import LinkButton from '../linkButton/LinkButton';
import Image from '../image/Image';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {object} props.image
 * @param {string} props.title
 * @param {string} props.text
 * @param {object} props.cta
 * @param {number} props.headingLevel
 */

const CTABanner = ({
  className,
  image,
  title,
  text,
  cta,
  headingLevel = 3,
}) => {
  const Heading = `h${headingLevel}`;
  return (
    <CTABannerStyled className={className}>
      <Image className="ctaImage" image={image} />
      <Heading className="ctaTitle">{title}</Heading>
      <p className="ctaText">{text}</p>
      <LinkButton className="ctaLink" label={cta.label} href={cta.uri} />
    </CTABannerStyled>
  );
};

export default CTABanner;
