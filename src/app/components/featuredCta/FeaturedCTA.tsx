import React from 'react';

import FeaturedCTAStyled from './FeaturedCTA.styled';
import Image, { ImageObject } from '../image/Image';
import LinkButton, { Props as LinkButtonProps } from '../linkButton/LinkButton';

export interface Props {
  className?: string,
  image: ImageObject;
  title: string;
  text: string;
  cta: LinkButtonProps;
  align?: 'right' | 'left';
  hasSVG?: true | false;
}

const FeaturedCTA = ({
  className,
  image,
  title,
  text,
  cta,
  align = 'left',
  hasSVG = false
}: Props) => {
  return (
    <FeaturedCTAStyled className={className} align={align} hasSVG={hasSVG}>
      <Image image={image} className="featured-cta__image" />
      <div className="featured-cta__content">
        <div className="featured-cta__wrapper">
          <h3 className="featured-cta__title">{title}</h3>
          <div
            className="featured-cta__text"
            dangerouslySetInnerHTML={{ __html: text }}
          />
          <LinkButton {...cta} className="featured-cta__link" icon="arrowRight" />
        </div>
      </div>
    </FeaturedCTAStyled>
  );
};

export default FeaturedCTA;
