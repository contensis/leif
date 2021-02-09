import React from 'react';

import FeaturedProductStyled from './FeaturedProduct.styled';
import LinkButton from '../linkButton/LinkButton';
import { ImageObject } from '../image/Image';
import Card from '../card/Card';

interface LinkObject {
  href: string;
  label: string;}
interface ProductInformation {
  price: number;
  Sku: string;
}

interface ProductObject {
  thumbnailImage: ImageObject;
  title: string;
  tag?: string;
  productInformation: ProductInformation;
  rating?: string;
}

interface Props {
  className?: string;
  title: string;
  text: string;
  link: LinkObject;
  product: ProductObject;
}

const FeaturedProduct: React.FC<Props> = ({
  className,
  title,
  text,
  link,
  product,
}) => {
  return (
    <FeaturedProductStyled className={className}>
      <div className="featured-product__content">
        <div className="featured-product__content-wrapper">
          <h3 className="featured-product__title">{title}</h3>
          <p className="featured-product__text">{text}</p>
          <LinkButton
            className="featured-product__btn"
            label={link.label}
            href={link.href}
          />
        </div>
        <Card
          className="featured-product__card"
          type="product"
          image={product.thumbnailImage}
          title={product.title}
          price={product.productInformation.price}
          rating={product.rating}
        />
      </div>
    </FeaturedProductStyled>
  );
};

export default FeaturedProduct;
