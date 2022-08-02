import React from 'react';

import CTABannerStyled from './CTABanner.styled';
import LinkButton from '../linkButton/LinkButton';
import Image from '../image/Image';

export interface Props {
  className?: string;
  imageUri?: string;
  imageAlt?: string;
  title?: string;
  text?: string;
  btnText?: string;
  btnLink?: string;
  btnType?: string;
}

const CTABanner = ({
  className,
  imageUri,
  imageAlt,
  title,
  text,
  btnText,
  btnLink,
  btnType,
}: Props) => {
  if (!btnLink) return null;
  return (
    <CTABannerStyled className={className}>
      <Image
        className="cta-banner__image"
        src={imageUri}
        alt={imageAlt}
        width={228}
        height={120}
      />
      <h2 className="cta-banner__title">{title}</h2>
      <p className="cta-banner__text">{text}</p>
      <LinkButton
        className="cta-banner__link"
        label={btnText}
        href={btnLink}
        type={btnType}
      />
    </CTABannerStyled>
  );
};

export default CTABanner;
