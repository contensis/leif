import React from 'react';

// Components
import ProductListing from '~/components/productListing/ProductListing';
import ListingContainer from '~/components/listing/Listing.container';
import Metadata from '~/components/metadata/Metadata';
import QuoteBlock from '~/components/quoteBlock/QuoteBlock';
import GenericHero from '~/components/genericHero/GenericHero';

// Layout
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';
import ProductListingStyled from './ProductListing.styled';

// Mappers
import {
  ListingProps,
  useMinilist,
} from '@zengenti/contensis-react-base/search';
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';

// Models
import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { Props } from './ProductListing.d';

const ProductListingPage = ({ mappedEntry }: RouteComponentProps<Props>) => {
  const { title, metadataProps } = mappedEntry || {};

  const featuredProducts = useMinilist({
    id: 'featuredProducts',
    mapper: mapEntriesToResults,
  });

  const reviews = useMinilist({
    id: 'reviews',
    mapper: mapEntriesToResults,
  });

  if (!mappedEntry) return <></>;
  return (
    <MainLayout>
      <Metadata {...metadataProps} />
      <ProductListingStyled>
        <h1 className="product-listing__title">{title}</h1>
        <Region width="large" margin="none">
          {featuredProducts &&
            featuredProducts.results &&
            featuredProducts.results.length >= 1 && (
              <GenericHero {...featuredProducts.results[0]} headingLevel={2} />
            )}
        </Region>
        <ListingContainer>
          {(listingProps: ListingProps) => (
            <>
              <ProductListing {...listingProps} />
              {listingProps.results && listingProps.results.length > 0 && (
                <Region width="small" margin="none">
                  {reviews?.results.map((review: any, idx: number) => (
                    <QuoteBlock
                      className="product-listing__quote"
                      key={idx}
                      {...review}
                    />
                  ))}
                </Region>
              )}
            </>
          )}
        </ListingContainer>
      </ProductListingStyled>
    </MainLayout>
  );
};

export default ProductListingPage;
