import React from 'react';

import ProductListingStyled from './ProductListing.styled';
import Card from '../card/Card';

interface Props {
  results?: any;
}

const ProductListing = ({ results }: Props) => {
  console.info({ results });
  return (
    <ProductListingStyled>
      <div className="product-listing__results">
        {results.map((res: any, idx: number) => (
          <Card key={idx} {...res} className="product-listing__result" />
        ))}
      </div>
    </ProductListingStyled>
  );
};

export default ProductListing;
