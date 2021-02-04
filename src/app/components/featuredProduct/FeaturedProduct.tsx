import React from 'react';

import FeaturedProductStyled from './FeaturedProduct.styled';
import  LinkButton from '../linkButton/LinkButton';
import { ImageObject } from '../image/Image';
import Card from '../card/Card';

interface LinkObject {
  href: string,
  label: string,
}

interface ProductObject {
  image: ImageObject,
    title: string,
    tag: string,
    price: string,
    rating: string,
}

interface Props {
  className?: string,
  title: string,
  text: string,
  link: LinkObject,
  product: ProductObject,
}

const FeaturedProduct: React.FC<Props> = ({ className, title, text, link, product }) => {
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
          image={product.image}
          title={product.title}
          price={product.price}
          rating={product.rating}
        />
      </div>
    </FeaturedProductStyled>
  );
};

export default FeaturedProduct;
