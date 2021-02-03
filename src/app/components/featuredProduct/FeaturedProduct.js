import React from 'react';

import FeaturedProductStyled from './FeaturedProduct.styled';
import LinkButton from '../linkButton/LinkButton';
import Card from '../card/Card';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.title
 * @param {string} props.text
 * @param {object} props.link
 * @param {object} props.product
 */

const FeaturedProduct = ({ className, title, text, link, product }) => {
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
          tag={product.tag}
          price={product.price}
          rating={product.rating}
        />
      </div>
    </FeaturedProductStyled>
  );
};

export default FeaturedProduct;
