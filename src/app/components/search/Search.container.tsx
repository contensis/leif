import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import mapEntriesToResults from './transformations';
import { useSelector } from 'react-redux';
import { withSearch } from '@zengenti/contensis-react-base/search';

// Redux
import { makeSelectDeviceType } from '../../core/redux/custom/ui/selectors';

// Components
import SearchStyled from './Search.styled';
import SearchCard from '../searchCard/SearchCard';
import SearchInput from '../searchInput/SearchInput';
import Filters from '../filters/Filters';
import Button from '../button/Button';

// Layout
import Region from '../../layout/Region';
import MainLayout from '../../layout/MainLayout';

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
}

const SearchContainer = ({
  className,
  updateSearchTerm,
  searchTerm,
  results,
  updatePageIndex,
  // updateCurrentFacet,
  updateSelectedFilters,
  paging,
  // currentFacet,
  clearFilters,
  // tabsAndFacets,
  filters,
}: Props) => {
  const hasResults = results && results.length > 0;
  // const facets = tabsAndFacets && tabsAndFacets[0] && tabsAndFacets[0].facets;
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

  const _handleSearchSubmit = (term: string) => {
    updateSearchTerm(term, 0);
  };

  const { pageIndex, pageCount } = paging;
  const hasLoadMore =
    pageIndex === null || pageCount === null
      ? false
      : pageIndex < pageCount - 1;

  const selectDeviceType = useSelector(makeSelectDeviceType);
  const device = useSelector(selectDeviceType);
  const isDesktop = device === 'laptop' ? true : false;

  // const facetsArray = Object.keys(facets).map(key => facets[key]);
  // facetsArray.map(facet => (facet.type = 'facet'));

  // const filtersArray = Object.keys(filters).map(key => filters[key]);

  // const facetsAndFilters = { ...facetsArray, ...filtersArray };
  // console.info({ facetsAndFilters });

  return (
    <MainLayout>
      <Region width="large" margin="none" padding="small">
        <SearchStyled className={className}>
          <h1 className="search__title">Search results</h1>
          <div className="search__header">
            {/* <Filters
              className="search__facets"
              filters={isDesktop ? facets : facetsAndFilters}
              currentFacet={currentFacet}
              updateCurrentFacet={updateCurrentFacet}
            /> */}
            <SearchInput searchTerm={searchTerm} _func={_handleSearchSubmit} />
          </div>
          {hasResults && (
            <>
              <div className="search__results-wrapper">
                <div className="search__results">
                  {results.map((res: any, idx: number) => (
                    <SearchCard
                      className="search__result-card"
                      key={idx}
                      {...res}
                    />
                  ))}
                </div>
                {isDesktop && (
                  <Filters
                    className="search__filters"
                    filters={filters}
                    updateSelectedFilters={updateSelectedFilters}
                    clearFilters={clearFilters}
                  />
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
            </>
          )}
          {!hasResults && <span>No results! :(</span>}
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
