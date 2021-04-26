import React, { useState, useEffect } from 'react';

// Components
import ProductListing from '~/components/productListing/ProductListing';
import ListingContainer from '../../components/listing/Listing.container';
import Metadata from '~/components/metadata/Metadata';
import QuoteBlock from '~/components/quoteBlock/QuoteBlock';
import GenericHero from '~/components/genericHero/GenericHero';

// Layout
import MainLayout from '../../layout/MainLayout';
import Region from '../../layout/Region';
import ProductListingStyled from './ProductListing.styled';

// Mappers
import { useMinilist } from '@zengenti/contensis-react-base/search';
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';

// Models
import { Props } from './ProductListing.d';

import { useSelector } from 'react-redux';
import { makeSelectHasResults } from '~/core/redux/custom/ui/selectors';

const ProductListingPage = ({ mappedEntry }: Props) => {
  const { title, metadataProps } = mappedEntry || {};

  const [featuredProductOptions, setFeaturedProductOptions] = useState<any>();
  useEffect(() => {
    setFeaturedProductOptions({
      id: 'featuredProduct',
      mapper: mapEntriesToResults,
    });
  }, []);

  const [reviewOptions, setReviewOptions] = useState<any>();
  useEffect(() => {
    setReviewOptions({
      id: 'reviews',
      mapper: mapEntriesToResults,
    });
  }, []);

  const { results: featuredProducts } = useMinilist(featuredProductOptions);
  const { results: reviews } = useMinilist(reviewOptions);
  featuredProducts.length = 1;

  const selectHasResults = useSelector(makeSelectHasResults);
  const hasResults = useSelector(selectHasResults);

  return (
    <MainLayout>
      <Metadata {...metadataProps} />
      <ProductListingStyled>
        <h1 className="product-listing__title">{title}</h1>
        <Region width="large" margin="none">
          {featuredProducts && <GenericHero {...featuredProducts[0]} />}
        </Region>
        <ListingContainer>
          <ProductListing />
        </ListingContainer>
        {hasResults && (
          <Region width="small" margin="none">
            {reviews.map((review: any, idx: number) => (
              <QuoteBlock
                className="product-listing__quote"
                key={idx}
                {...review}
              />
            ))}
          </Region>
        )}
      </ProductListingStyled>
    </MainLayout>
  );
};

export default ProductListingPage;
