import React from 'react';

import ProductListingStyled from './ProductListing.styled';

// Hooks
import useWindowScroll from '~/components/search/hooks/useWindowScroll';
import useProductFilters from '../search/hooks/useProductFilters';

// Components
import Card from '../card/Card';
import Filters from '../filters/Filters';
import Button from '../button/Button';
import NoResults from '../noResults/NoResults';
import { ListingProps } from '@zengenti/contensis-react-base/search';

const ProductListing = ({
  clearFilters,
  currentListing,
  filters,
  paging,
  results,
  updateSelectedFilters,
  updatePageIndex,
  updateCurrentFacet,
}: ListingProps) => {
  const [, setWindowOffset] = useWindowScroll();

  const productFilters = useProductFilters(filters);

  const _handleLoadMore = (pageIndex: number) => {
    if (typeof window != 'undefined') {
      setWindowOffset(window.pageYOffset);
    }
    updatePageIndex(pageIndex);
  };

  const { pageIndex, pageCount } = paging;
  const hasLoadMore =
    pageIndex === null || pageCount === null
      ? false
      : pageIndex < pageCount - 1;

  const hasResults = results && results.length >= 1;
  return (
    <ProductListingStyled>
      <Filters
        className="product-listing__filters"
        currentFacet={currentListing}
        filters={productFilters}
        updateSelectedFilters={updateSelectedFilters}
        updateCurrentFacet={updateCurrentFacet}
        clearFilters={clearFilters}
        hasResetBtn={true}
      />
      {hasResults && (
        <div className="product-listing__results">
          {results.map((res: any, idx: number) => (
            <Card key={idx} {...res} className="product-listing__result" />
          ))}
        </div>
      )}
      {!hasResults && (
        <NoResults
          className="product-listing__no-results"
          title="Sorry, nothing matches your search"
          text="Try resetting any filters, checking for typos, or adjusting your search term."
        />
      )}
      {hasLoadMore && (
        <Button
          className="product-listing__load-more"
          type="button"
          label="Load more"
          icon="arrow-down"
          onClick={() => _handleLoadMore(pageIndex + 1)}
          btnTheme="secondary"
          isHollow
        />
      )}
    </ProductListingStyled>
  );
};

export default ProductListing;
