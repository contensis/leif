import React from 'react';
import PropTypes from 'prop-types';

import FeaturedProductStyled from '../components.styled/FeaturedProduct.styled';
import { LinkButton } from '../../button';
import Card from '../../card';

const FeaturedProduct = ({ className, title, text, link, product }) => {
  return (
    <FeaturedProductStyled className={className}>
      <div className="fpContent">
        <div className="fpContentWrapper">
          <h2 className="fpTitle">{title}</h2>
          <p>{text}</p>
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

FeaturedProduct.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.object,
  product: PropTypes.object,
};

export default FeaturedProduct;
