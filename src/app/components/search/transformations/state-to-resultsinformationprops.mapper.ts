import {
  SearchTransformations,
  selectors,
} from '@zengenti/contensis-react-base/search';
import mapJson from '~/core/util/json-mapper';

const { getFacet, getResults, getSearchTerm, getTabsAndFacets } = selectors;

// Helper functions to save repetition
const pagingInfo = (state: any) => {
  const facet = getFacet(state);
  if (!facet) return {};

  const pagingInfo = facet.get('pagingInfo');
  if (!pagingInfo) return {};

  return pagingInfo.toJS();
};

const searchTerm = (state: any) => getSearchTerm(state);

const wholeSearchTotal = (state: any) => {
  const tabsAndFacets = getTabsAndFacets(state).toJS();
  const wholeSearchTotal = tabsAndFacets
    .map((t: any) => t.totalCount)
    .reduce((a: any, b: any) => a + b, 0);
  return wholeSearchTotal;
};

// The mapper object
const resultsInfoTemplate = {
  facetName: (state: any) => getFacet(state).get('title'),
  hasLoadMore: (state: any) => {
    const { pageIndex, pageCount } = pagingInfo(state);
    const hasLoadMore =
      pageIndex === null || pageCount === null
        ? false
        : pageIndex < pageCount - 1;
    return hasLoadMore;
  },
  hasResults: (state: any) => getResults(state).size > 0,
  start: (state: any) => {
    const { pagesLoaded, pageSize } = pagingInfo(state);
    const start = pagesLoaded[0] * pageSize + 1;

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
  resultsText: (state: any) => {
    const { pagesLoaded, pageSize, totalCount } = pagingInfo(state);
    const start = pagesLoaded[0] * pageSize + 1;
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
