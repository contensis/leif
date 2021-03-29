import React from 'react';

// Components
import ProductListing from '~/components/productListing/ProductListing';
import ListingContainer from '../../components/listing/Listing.container';

// Layout
import MainLayout from '../../layout/MainLayout';
import ProductListingStyled from './ProductListing.styled';

// Models
import { Props } from './ProductListing.d';

const ProductListingPage = ({ mappedEntry }: Props) => {
  const { title } = mappedEntry || {};
  return (
    <MainLayout>
      <ProductListingStyled>
        <h1 className="product-listing__title">{title}</h1>
        <ListingContainer>
          <ProductListing />
        </ListingContainer>
      </ProductListingStyled>
    </MainLayout>
  );
};

export default ProductListingPage;
