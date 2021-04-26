import React, { useState, useEffect } from 'react';

import ProductListingStyled from './ProductListing.styled';

import { useSelector } from 'react-redux';
import { selectCurrentPathname } from '../../core/redux/custom/routing/selectors';

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
  const [windowOffset, setWindowOffset] = useState<number>(0);

  let potFilters: any = {};
  let plantFilters: any = {};
  let defaultFilters: any = {};

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
          title="No results found"
          text="Tellus sit pellentesque sit sed sed faucibus sit quam. Massa lorem vestibulum, non viverra interdum aliquam amet."
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
