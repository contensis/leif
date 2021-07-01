import React, { useState, useEffect } from 'react';

import ProductListingStyled from './ProductListing.styled';

import { useSelector } from 'react-redux';
import { selectCurrentPathname } from '~/redux/routing/selectors';
import useWindowScroll from '~/components/search/hooks/useWindowScroll';

// Components
import Card from '../card/Card';
import Filters from '../filters/Filters';
import Button from '../button/Button';
import NoResults from '../noResults/NoResults';
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
  const [, setWindowOffset] = useWindowScroll();

  const potFilters: any = {};
  const plantFilters: any = {};
  const defaultFilters: any = {};

  Object.keys(filters).map((fKey: any) => {
    switch (fKey) {
      case 'colour':
      case 'potSize': {
        potFilters[fKey] = filters[fKey];
        break;
      }
      case 'plantType':
      case 'plantSize': {
        plantFilters[fKey] = filters[fKey];
        break;
      }
      default: {
        plantFilters[fKey] = filters[fKey];
        potFilters[fKey] = filters[fKey];
        defaultFilters[fKey] = filters[fKey];
        break;
      }
    }
  });

  const _handleLoadMore = (pageIndex: number) => {
    if (typeof window != 'undefined') {
      setWindowOffset(window.pageYOffset);
    }
    updatePageIndex(pageIndex);
  };

  const [isPotFilterSelected, setIsPotFilterSelected] = useState(false);
  const [isPlantFilterSelected, setIsPlantFilterSelected] = useState(false);

  // Get the current pathname from state
  const path: string = useSelector(selectCurrentPathname);

  // Depending on the path toggle the correct filters
  useEffect(() => {
    if (path && path.includes('pot')) {
      setIsPlantFilterSelected(false);
      setIsPotFilterSelected(true);
    } else if (path && path.includes('plant')) {
      setIsPlantFilterSelected(true);
      setIsPotFilterSelected(false);
    } else {
      setIsPotFilterSelected(false);
      setIsPlantFilterSelected(false);
    }
  }, [path]);

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
        filters={
          isPotFilterSelected
            ? potFilters
            : isPlantFilterSelected
            ? plantFilters
            : defaultFilters
        }
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
