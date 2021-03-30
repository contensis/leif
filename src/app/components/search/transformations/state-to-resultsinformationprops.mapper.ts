import { selectors } from '@zengenti/contensis-react-base/search';
import { fromJS } from 'immutable';

import { default as mapJson } from '../../../core/util/json-mapper';

const {
  getCurrent,
  getListing,
  getResults,
  getTotalCount,
  getPaging,
} = selectors.selectListing;

const listingTitle = (state: any) => getListing(state).get('title');
const totalCount = (state: any) => getTotalCount(state);

const searchSummaryTemplate = {
  currentListing: (state: any) => getCurrent(state),
  currentPageCount: (state: any) => getResults(state).size,
  listingTitle,
  noResultsText: (state: any) =>
    totalCount(state) === 0 ? `No results were found` : '',
  resultsText: (state: any) => {
    const { pageIndex, pageSize, totalCount, pagesLoaded } = getPaging(
      state
    ).toJS();
    if (!pagesLoaded) return null;
    const start = (pagesLoaded[0] || pageIndex) * pageSize + 1;
    let end = start + (pagesLoaded.length * pageSize || pageSize) - 1;
    if (end > totalCount) end = totalCount;

    return `Showing <span>${start} - ${end} of ${totalCount}</span> results`;
  },
};

const mapStateToResultsInformation = (state: any) =>
  fromJS(mapJson(state, searchSummaryTemplate)).toJS();

export default mapStateToResultsInformation;
