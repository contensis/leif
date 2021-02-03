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
      <Image className="cta-banner__image" image={image} />
      <Heading className="cta-banner__title">{title}</Heading>
      <p className="cta-banner__text">{text}</p>
      <LinkButton
        className="cta-banner__link"
        label={cta.label}
        href={cta.uri}
      />
    </CTABannerStyled>
  );
};

export default CTABanner;
