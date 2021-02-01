import React from 'react';

import FeaturedProductStyled from '../components.styled/FeaturedProduct.styled';
import { LinkButton } from '../../button';
import Card from '../../card';

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
      <div className="fpContent">
        <div className="fpContentWrapper">
          <h3 className="fpTitle">{title}</h3>
          <p className="fpText">{text}</p>
          <LinkButton className="fpBtn" label={link.label} href={link.href} />
        </div>
        <Card
          className="fpCard"
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
