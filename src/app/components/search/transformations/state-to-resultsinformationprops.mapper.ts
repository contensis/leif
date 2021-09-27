import {
  SearchTransformations,
  selectors,
} from '@zengenti/contensis-react-base/search';
import mapJson from '~/core/util/json-mapper';

const { getFacet, getPaging, getResults, getSearchTerm, getTabsAndFacets } =
  selectors;

// Helper functions to save repetition
const pagingInfo = (state: any) => getPaging(state);

const searchTerm = (state: any) => getSearchTerm(state);

const wholeSearchTotal = (state: any) => {
  const tabsAndFacets = getTabsAndFacets(state);
  const wholeSearchTotal = tabsAndFacets
    .map((t: any) => t.totalCount)
    .reduce((a: any, b: any) => a + b, 0);
  return wholeSearchTotal;
};

// The mapper object
const resultsInfoTemplate = {
  facetName: (state: any) => getFacet(state).title,
  hasLoadMore: (state: any) => {
    const { pageIndex, pageCount } = pagingInfo(state);
    const hasLoadMore =
      pageIndex === null || pageCount === null
        ? false
        : pageIndex < pageCount - 1;
    return hasLoadMore;
  },
  hasResults: (state: any) => getResults(state).length > 0,
  start: (state: any) => {
    const { pagesLoaded = [], pageSize } = pagingInfo(state);
    const start = pagesLoaded?.[0] * pageSize + 1;

    return start;
  },
  end: (state: any) => {
    const { pageIndex, pageSize, totalCount } = pagingInfo(state);
    const start = pageIndex * pageSize + 1;

    let end = start + pageSize - 1;
    if (end > totalCount) end = totalCount;

    return end;
  },
  total: (state: any) => {
    const { totalCount } = pagingInfo(state);
    return totalCount;
  },
  noResultsText: {
    title: () => 'Sorry, nothing matches your search',
    text: () =>
      'Try resetting any filters, checking for typos, or adjusting your search term.',
  },
  resultsText: (state: any) => {
    const { pagesLoaded = [], pageSize, totalCount } = pagingInfo(state);
    const start = pagesLoaded?.[0] * pageSize + 1;
    const term = searchTerm(state);
    let end = start + pagesLoaded.length * pageSize - 1;
    if (end > totalCount) end = totalCount;

    if (totalCount === 0) {
      return `No results returned `;
    } else {
      return `Showing <span>${start}-${end} of ${totalCount}</span> results${
        !term ? '.' : ''
      } ${term && `for <span>'${term}'</span>.`}`;
    }
  },
  searchTerm,
  wholeSearchTotal,
};

const mapStateToResultsInformation: SearchTransformations['resultsInfo'] =
  state => mapJson(state, resultsInfoTemplate);

export default mapStateToResultsInformation;
