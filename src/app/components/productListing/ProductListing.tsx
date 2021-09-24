import React, { useState, useEffect } from 'react';

import ProductListingStyled from './ProductListing.styled';

import useWindowScroll from '~/components/search/hooks/useWindowScroll';

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

  const [potFilters, setPotFilters] = useState({});
  const [plantFilters, setPlantFilters] = useState({});
  const [defaultFilters, setDefaultFilters] = useState({});

  useEffect(() => {
    const pot: any = {};
    const plant: any = {};
    const all: any = {};
    Object.keys(filters).forEach((fKey: any) => {
      switch (fKey) {
        case 'colour':
        case 'potSize': {
          pot[fKey] = filters[fKey];
          break;
        }
        case 'plantType':
        case 'plantSize': {
          plant[fKey] = filters[fKey];
          break;
        }
        default: {
          plant[fKey] = filters[fKey];
          pot[fKey] = filters[fKey];
          all[fKey] = filters[fKey];
          break;
        }
      }
    });
    setPotFilters(pot);
    setPlantFilters(plant);
    setDefaultFilters(all);
  }, [filters]);

  const _handleLoadMore = (pageIndex: number) => {
    if (typeof window != 'undefined') {
      setWindowOffset(window.pageYOffset);
    }
    updatePageIndex(pageIndex);
  };

  const [isPotFilterSelected, setIsPotFilterSelected] = useState(false);
  const [isPlantFilterSelected, setIsPlantFilterSelected] = useState(false);

  // Depending on the path toggle the correct filters
  useEffect(() => {
    if (window.location.pathname.includes('pot')) {
      setIsPlantFilterSelected(false);
      setIsPotFilterSelected(true);
    } else if (window.location.pathname.includes('plant')) {
      setIsPlantFilterSelected(true);
      setIsPotFilterSelected(false);
    } else {
      setIsPotFilterSelected(false);
      setIsPlantFilterSelected(false);
    }
  }, [window.location.pathname]);

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
