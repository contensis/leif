import React from 'react';

import CTABannerStyled from './CTABanner.styled';
import LinkButton from '../linkButton/LinkButton';
import Image, { ImageObject } from '../image/Image';

interface CTAObject {
  label: string;
  uri: string;
  type: string,
}

interface Props {
  className?: string;
  image: ImageObject;
  title: string;
  text: string;
  cta: CTAObject;
  headingLevel: number;
}

const CTABanner: React.FC<Props> = ({
  className,
  image,
  title,
  text,
  cta,
  // headingLevel = 3,
}) => {
  // const Heading = `h${headingLevel}`; TODO:
  return (
    <CTABannerStyled className={className}>
      <Image className="cta-banner__image" image={image} />
      <h3 className="cta-banner__title">{title}</h3>
      <p className="cta-banner__text">{text}</p>
      <LinkButton
        className="cta-banner__link"
        label={cta.label}
        href={cta.uri}
        type={cta.type}
      />
    </CTABannerStyled>
  );
};

export default CTABanner;
