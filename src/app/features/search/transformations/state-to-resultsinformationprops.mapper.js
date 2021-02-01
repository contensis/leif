import { selectors } from '@zengenti/contensis-react-base/search';
import { fromJS } from 'immutable';

import { default as mapJson } from '~/core/util/json-mapper';

const {
  getCurrent,
  getListing,
  getResults,
  getTotalCount,
  getPaging,
} = selectors.selectListing;

const listingTitle = state => getListing(state).get('title');
const totalCount = state => getTotalCount(state);

const searchSummaryTemplate = {
  currentListing: state => getCurrent(state),
  currentPageCount: state => getResults(state).size,
  listingTitle,
  noResultsText: state =>
    totalCount(state) === 0 ? `No results were found` : '',
  resultsText: state => {
    const { pageIndex, pageSize, totalCount, pagesLoaded } = getPaging(
      state
    ).toJS();
    if (!pagesLoaded) return null;
    const start = (pagesLoaded[0] || pageIndex) * pageSize + 1;
    let end = start + (pagesLoaded.length * pageSize || pageSize) - 1;
    if (end > totalCount) end = totalCount;

    return `${start} - ${end} of ${totalCount} results`;
  },
};

const mapStateToResultsInformation = state =>
  fromJS(mapJson(state, searchSummaryTemplate)).toJS();

export default mapStateToResultsInformation;
