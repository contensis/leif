import React from 'react';

import FeaturedProductStyled from './FeaturedProduct.styled';
import LinkButton from '../linkButton/LinkButton';
import Card from '../card/Card';
export interface Props {
  className?: string;
  title: string;
  text: string;
  linkUri: string;
  linkLabel: string;
  product: any;
}

const FeaturedProduct = ({
  className,
  title,
  text,
  linkUri,
  linkLabel,
  product,
}: Props) => {
  return (
    <FeaturedProductStyled className={className}>
      <div className="featured-product__content">
        <div className="featured-product__content-wrapper">
          {title && <h2 className="featured-product__title">{title}</h2>}
          {text && (
            <p
              className="featured-product__text"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
          {linkUri && linkLabel && (
            <LinkButton
              className="featured-product__btn"
              label={linkLabel}
              href={linkUri}
            />
          )}
        </div>
        {product && <Card className="featured-product__card" {...product} />}
      </div>
    </FeaturedProductStyled>
  );
};

export default FeaturedProduct;
