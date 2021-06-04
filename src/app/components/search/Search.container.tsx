import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import searchMappers from './transformations';
import { useSelector } from 'react-redux';
import {
  withSearch,
  Filters,
  SearchProps,
} from '@zengenti/contensis-react-base/search';
import { selectScreenSize } from '~/redux/ui/selectors';
import { selectCurrentPathname } from '~/redux/routing/selectors';

// Components
import SearchStyled from './Search.styled';
import SearchCard from '../searchCard/SearchCard';
import SearchFilters from '../filters/Filters';
import SearchInput from '../searchInput/SearchInput';
import Button from '../button/Button';
import Metadata from '../metadata/Metadata';
import Card from '../card/Card';
import NoResults from '../noResults/NoResults';
import PromotedContent from '../promotedContent/PromotedContent';

// Layout
import Region from '~/layout/Region';
import MainLayout from '~/layout/MainLayout';

interface Props {
  className?: string;
  exploreMore?: any[];
  results?: any;
  resultsInfo?: any;
}

const SearchContainer: React.FC<Props & SearchProps> = ({
  className,
  clearFilters,
  currentFacet,
  currentPageIndex,
  exploreMore,
  facets,
  featuredResults,
  filters,
  results,
  resultsInfo,
  searchTerm,
  updateCurrentFacet,
  updatePageIndex,
  updateSearchTerm,
  updateSelectedFilters,
}) => {
  const screenSize = useSelector(selectScreenSize);
  const isDesktop = screenSize >= 1024 ? true : false;

  const { hasLoadMore, hasResults, noResultsText, resultsText } =
    resultsInfo || {};

  /* eslint-disable */
  const [windowOffset, setWindowOffset] = useState<number>(0);

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

  const _handleSearchSubmit = (term: string) => updateSearchTerm(term);

  // Combining the Facets and Filter objects into one.
  const facetsAndFilters = { ...facets, ...filters };

  // Product Facet Filters
  const [isPotFilterSelected, setIsPotFilterSelected] = useState(false);
  const [isPlantFilterSelected, setIsPlantFilterSelected] = useState(false);

  // Get the current pathname from state
  const path = useSelector(selectCurrentPathname) as string;

  // Depending on the path toggle the correct filters
  useEffect(() => {
    if (path?.includes('pot')) {
      setIsPlantFilterSelected(false);
      setIsPotFilterSelected(true);
    } else if (path?.includes('plant')) {
      setIsPlantFilterSelected(true);
      setIsPotFilterSelected(false);
    } else {
      setIsPotFilterSelected(false);
      setIsPlantFilterSelected(false);
    }
  }, [path]);

  const potFilters = {} as Filters;
  const plantFilters = {} as Filters;
  const defaultFilters = {} as Filters;

  Object.entries(filters || {}).map(([fKey, filter]) => {
    switch (fKey) {
      case 'colour':
      case 'potSize': {
        potFilters[fKey] = filter;
        break;
      }
      case 'plantType':
      case 'plantSize': {
        plantFilters[fKey] = filter;
        break;
      }
      default: {
        plantFilters[fKey] = filter;
        potFilters[fKey] = filter;
        defaultFilters[fKey] = filter;
        break;
      }
    }
  });
  const searchFilters = isPotFilterSelected
    ? potFilters
    : isPlantFilterSelected
    ? plantFilters
    : defaultFilters;

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
            <SearchFilters
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
                  title={noResultsText.title}
                  text={noResultsText.text}
                />
              )}
            </div>
            {isDesktop && hasResults && (
              <>
                {currentFacet !== 'all' && (
                  <SearchFilters
                    className="search__filters"
                    clearFilters={clearFilters}
                    currentFacet={currentFacet}
                    filters={searchFilters}
                    hasResetBtn={true}
                    updateCurrentFacet={updateCurrentFacet}
                    updateSelectedFilters={updateSelectedFilters}
                  />
                )}
                {hasResults &&
                  currentFacet === 'all' &&
                  featuredResults.length > 0 && (
                    <div className="search__featured-products">
                      {featuredResults
                        .slice(-2)
                        .map((featuredProduct: any, idx: number) => {
                          return <Card key={idx} {...featuredProduct} />;
                        })}
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
              onClick={() => _handleLoadMore(currentPageIndex + 1)}
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
  results: PropTypes.array,
  resultsInfo: PropTypes.object,
};

export default withSearch(searchMappers)(SearchContainer);
