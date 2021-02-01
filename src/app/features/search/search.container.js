import React from 'react';
import PropTypes from 'prop-types';
import mapEntriesToResults from './transformations';
import { withSearch } from '@zengenti/contensis-react-base/search';

const SearchContainer = ({
  // className,
  // updateCurrentFacet,
  // updateCurrentTab,
  // updateSearchTerm,
  // updateSelectedFilters,
  // currentFacet,
  // currentPageIndex,
  // currentTabIndex,
  // featured,
  results,
  // resultsInfo,
  // updatePageIndex,
  // searchTerm,
  // tabsAndFacets,
  // paging,
}) => {
  console.info({ results });
  return (
    <div>
      <h1>Search</h1>
    </div>
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
