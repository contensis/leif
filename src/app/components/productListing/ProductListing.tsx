import React, { useState, useEffect } from 'react';

import ProductListingStyled from './ProductListing.styled';

import Card from '../card/Card';
import Filters from '../filters/Filters';
import Button from '../button/Button';

interface Props {
  results?: any;
  filters?: any;
  facets?: any;
  paging?: any;
  updateSelectedFilters: (filterGroupKey: string, key: string) => void;
  updatePageIndex: (ev: number) => void;
  updateCurrentFacet: () => void;
  clearFilters: () => void;
}

const ProductListing = ({
  results,
  filters,
  updateSelectedFilters,
  updatePageIndex,
  updateCurrentFacet,
  paging,
  clearFilters,
}: Props) => {
  const [windowOffset, setWindowOffset] = useState<number>(0);

  /* eslint-disable */
  useEffect(() => {
    if (typeof window != 'undefined') {
      window.scrollTo(0, windowOffset);
    }
  }, []);
  /* eslint-enable */

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
        filters={filters}
        updateSelectedFilters={updateSelectedFilters}
        updateCurrentFacet={updateCurrentFacet}
        clearFilters={clearFilters}
        hasResetBtn={true}
      />
      <div className="product-listing__results">
        {hasResults &&
          results.map((res: any, idx: number) => (
            <Card key={idx} {...res} className="product-listing__result" />
          ))}
        {!hasResults && (
          <div className="no-results">
            <h3>Sorry! No results found :(</h3>
            <p>Maybe try selecting another filter?</p>
          </div>
        )}
      </div>
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
