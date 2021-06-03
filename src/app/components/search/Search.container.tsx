import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import searchMappers from './transformations';
import { useSelector } from 'react-redux';
import { withSearch } from '@zengenti/contensis-react-base/search';
import { selectScreenSize } from '~/redux/ui/selectors';
import { selectCurrentPathname } from '~/redux/routing/selectors';

// Components
import SearchStyled from './Search.styled';
import SearchCard from '../searchCard/SearchCard';
import SearchInput from '../searchInput/SearchInput';
import Filters from '../filters/Filters';
import Button from '../button/Button';
import Metadata from '../metadata/Metadata';
import Card from '../card/Card';
import NoResults from '../noResults/NoResults';
import PromotedContent from '../promotedContent/PromotedContent';

// Layout
import Region from '../../layout/Region';
import MainLayout from '../../layout/MainLayout';

interface Props {
  className?: string;
  clearFilters: () => void;
  currentFacet: string;
  exploreMore?: any[];
  featuredProducts?: any;
  filters?: any;
  paging?: any;
  results?: any;
  resultsInfo?: any;
  searchTerm: string;
  tabsAndFacets: any;
  updateCurrentFacet: () => void;
  updatePageIndex: (ev: number) => void;
  updateSearchTerm: (ev: any, num: number) => void;
  updateSelectedFilters: (filterGroupKey: string, key: string) => void;
}

const SearchContainer = ({
  className,
  clearFilters,
  currentFacet,
  exploreMore,
  featuredProducts,
  filters,
  paging,
  results,
  resultsInfo,
  searchTerm,
  tabsAndFacets,
  updateCurrentFacet,
  updatePageIndex,
  updateSearchTerm,
  updateSelectedFilters,
}: Props) => {
  const facets = tabsAndFacets && tabsAndFacets[0] && tabsAndFacets[0].facets;
  const [windowOffset, setWindowOffset] = useState<number>(0);

  const { hasLoadMore, hasResults, resultsText } = resultsInfo || {};

  /* eslint-disable */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, windowOffset);
    }
  }, []);
  /* eslint-enable */

  const _handleLoadMore = (pageIndex: number) => {
    if (typeof window !== 'undefined') {
      setWindowOffset(window.pageYOffset);
    }
    updatePageIndex(pageIndex);
  };

  const _handleSearchSubmit = (term: string) => {
    updateSearchTerm(term, 0);
  };

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

  return (
    <MainLayout>
      <Metadata
        title="Search our site"
        image="/image-library/default-images/leif-fallback.png"
      />
      <SearchStyled className={className} noResults={!hasResults}>
        <Region width="large" margin="none" padding="small">
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
                  title="Sorry, nothing matches your search"
                  text="Try resetting any filters, checking for typos, or adjusting your search term."
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
                  featuredProducts &&
                  featuredProducts.length >= 1 && (
                    <div className="search__featured-products">
                      {featuredProducts.map(
                        (featuredProduct: any, idx: number) => {
                          return <Card key={idx} {...featuredProduct} />;
                        }
                      )}
                    </div>
                  )}
              </>
            )}
          </div>
          {hasLoadMore && (
            <Button
              className="search__load-more"
              type="button"
              label="Load more"
              icon="arrow-down"
              onClick={() => _handleLoadMore(paging.pageIndex + 1)}
              btnTheme="secondary"
              isHollow
            />
          )}
        </Region>
        {!hasResults && (
          <PromotedContent
            className="search__explore-more"
            title="Explore more"
            results={exploreMore}
          />
        )}
      </SearchStyled>
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

export default withSearch(searchMappers)(SearchContainer);
