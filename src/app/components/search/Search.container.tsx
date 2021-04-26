import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import mapEntriesToResults from './transformations';
import { useSelector } from 'react-redux';
import { withSearch } from '@zengenti/contensis-react-base/search';
import { selectScreenSize } from '../../core/redux/custom/ui/selectors';
import { selectCurrentPathname } from '../../core/redux/custom/routing/selectors';

// Components
import SearchStyled from './Search.styled';
import SearchCard from '../searchCard/SearchCard';
import SearchInput from '../searchInput/SearchInput';
import Filters from '../filters/Filters';
import Button from '../button/Button';
import Metadata from '../metadata/Metadata';
import Card from '../card/Card';

// Layout
import Region from '../../layout/Region';
import MainLayout from '../../layout/MainLayout';
import NoResults from '../noResults/NoResults';

interface Props {
  className?: string;
  results?: any;
  resultsInfo?: any;
  filters?: any;
  searchTerm: string;
  updateSearchTerm: (ev: any, num: number) => void;
  updatePageIndex: (ev: number) => void;
  updateSelectedFilters: (filterGroupKey: string, key: string) => void;
  updateCurrentFacet: () => void;
  clearFilters: () => void;
  paging?: any;
  currentFacet: string;
  tabsAndFacets: any;
  featuredProducts?: any;
}

const SearchContainer = ({
  className,
  updateSearchTerm,
  searchTerm,
  results,
  updatePageIndex,
  resultsInfo,
  updateCurrentFacet,
  updateSelectedFilters,
  paging,
  currentFacet,
  clearFilters,
  tabsAndFacets,
  filters,
  featuredProducts,
}: Props) => {
  const hasResults = results && results.length >= 1;
  const facets = tabsAndFacets && tabsAndFacets[0] && tabsAndFacets[0].facets;
  const [windowOffset, setWindowOffset] = useState<number>(0);

  const { resultsText } = resultsInfo || {};

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

  const _handleSearchSubmit = (term: string) => {
    updateSearchTerm(term, 0);
  };

  const { pageIndex, pageCount } = paging || {};
  const hasLoadMore =
    pageIndex === null || pageCount === null
      ? false
      : pageIndex < pageCount - 1;

  const screenSize = useSelector(selectScreenSize);
  const isDesktop = screenSize >= 1024 ? true : false;

  // Adding a 'Type' to each Facet Object.
  const facetsArray = Object.keys(facets).map(key => facets[key]);
  facetsArray.map(facet => (facet.type = 'facet'));
  // Combining the Facets and Filter Arrays into one Object.
  const facetsAndFilters = { ...facets, ...filters };

  // Product Facet Filters
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

  return (
    <MainLayout>
      <Metadata
        title="Search our site"
        image="/image-library/default-images/leif-fallback.png"
      />
      <Region width="large" margin="none" padding="small">
        <SearchStyled className={className} noResults={!hasResults}>
          <h1 className="search__title">Search results</h1>
          <div className="search__header">
            <Filters
              className="search__facets"
              filters={isDesktop ? facets : facetsAndFilters}
              hasResetBtn={isDesktop ? false : true}
              currentFacet={currentFacet}
              updateCurrentFacet={updateCurrentFacet}
              updateSelectedFilters={updateSelectedFilters}
              clearFilters={clearFilters}
            />
            <SearchInput searchTerm={searchTerm} _func={_handleSearchSubmit} />
          </div>
          {hasResults && resultsText && (
            <p
              className="search__results-info--text"
              dangerouslySetInnerHTML={{ __html: resultsText }}
            />
          )}
          <div className="search__results-wrapper">
            <div className="search__results">
              {hasResults && (
                <>
                  {results.map((res: any, idx: number) => (
                    <SearchCard
                      className="search__result-card"
                      key={idx}
                      {...res}
                    />
                  ))}
                </>
              )}
              {!hasResults && (
                <NoResults
                  title="No results found"
                  text="Tellus sit pellentesque sit sed sed faucibus sit quam. Massa lorem vestibulum, non viverra interdum aliquam amet."
                />
              )}
            </div>
            {isDesktop && hasResults && (
              <>
                {currentFacet !== 'all' && (
                  <Filters
                    className="search__filters"
                    filters={
                      isPotFilterSelected
                        ? potFilters
                        : isPlantFilterSelected
                        ? plantFilters
                        : defaultFilters
                    }
                    updateSelectedFilters={updateSelectedFilters}
                    updateCurrentFacet={updateCurrentFacet}
                    currentFacet={currentFacet}
                    clearFilters={clearFilters}
                    hasResetBtn={true}
                  />
                )}
                {hasResults &&
                  currentFacet === 'all' &&
                  (featuredProducts && featuredProducts.length >= 1 && (
                    <div className="search__featured-products">
                      {featuredProducts.map(
                        (featuredProduct: any, idx: number) => {
                          return <Card key={idx} {...featuredProduct} />;
                        }
                      )}
                    </div>
                  ))}
              </>
            )}
          </div>
          {hasLoadMore && (
            <Button
              className="search__load-more"
              type="button"
              label="Load more"
              icon="arrow-down"
              onClick={() => _handleLoadMore(pageIndex + 1)}
              btnTheme="secondary"
              isHollow
            />
          )}
        </SearchStyled>
      </Region>
    </MainLayout>
  );
};

SearchContainer.propTypes = {
  className: PropTypes.string,
  currentFacet: PropTypes.string,
  currentPageIndex: PropTypes.number,
  currentTabIndex: PropTypes.number,
  featured: PropTypes.array,
  results: PropTypes.array,
  resultsInfo: PropTypes.object,
  searchTerm: PropTypes.string,
  tabsAndFacets: PropTypes.array,
  updateCurrentFacet: PropTypes.func,
  updateCurrentTab: PropTypes.func,
  updateSearchTerm: PropTypes.func,
  updateSelectedFilters: PropTypes.func,
  updatePageIndex: PropTypes.func,
  paging: PropTypes.object,
  filters: PropTypes.object,
};

export default withSearch(mapEntriesToResults)(SearchContainer);
