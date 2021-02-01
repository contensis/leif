import React from 'react';
import PropTypes from 'prop-types';

import CTABannerStyled from '../components.styled/CTABanner.styled';
import { LinkButton } from '../../button';

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
      <img
        className="ctaImage"
        src={image.asset.sys.uri}
        alt={image.asset.altText}
      />
      <Heading className="ctaTitle">{title}</Heading>
      <p className="ctaText">{text}</p>
      <LinkButton className="ctaLink" label={cta.label} href={cta.uri} />
    </CTABannerStyled>
  );
};

CTABanner.propTypes = {
  className: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.string,
  text: PropTypes.string,
  cta: PropTypes.object,
  headingLevel: PropTypes.number,
};

export default CTABanner;
