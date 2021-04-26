import { List, fromJS } from 'immutable';
import queryString from 'query-string';
import { selectors } from '@zengenti/contensis-react-base/search';

import { default as mapJson } from '../../../core/util/json-mapper';
import { removeEmptyAttributes } from '../../../core/util/helpers';
import { selectCurrentPath } from '../../../core/redux/selectors';

const {
  getSelectedFilters,
  getSearchTerm,
  getSearchContext,
  getCurrentFacet,
  getCurrentListing,
} = selectors;

const searchUriTemplate = {
  path: ({ state, facet }) => {
    const context = getSearchContext(state);
    const currentPath = selectCurrentPath(state) || '/search';
    const listing = getCurrentListing(state);

    if (context !== 'listings') {
      const currentFacet = facet || getCurrentFacet(state);

      // Get the Plant or Pot filter
      let filters = getSelectedFilters(state, facet, context);
      filters = filters && filters.toJS();
      const currentFilter = filters.contentTypeId;

      // Check if we have a Plant or Pot filter first
      const newPath =
        currentFilter && currentFacet
          ? `${currentPath}/${currentFacet}${currentFilter}`
          : currentFacet
          ? `${currentPath}/${currentFacet}`
          : currentPath;

      return newPath;
    } else if (listing === 'productsListing') {
      let filters = getSelectedFilters(state, facet, context);
      filters = filters && filters.toJS();

      const currentFilter = filters.contentTypeId;
      const newPath = currentFilter
        ? `${currentPath}/${currentFilter}`
        : currentPath;

      return newPath;
    } else {
      return currentPath;
    }
  },
  search: ({ state, facet, orderBy, pageIndex, term }) => {
    const searchContext = getSearchContext(state);
    // Lose stateFilters and currentSearch if a new
    // term is passed via an argument
    const stateFilters = term
      ? new List([])
      : getSelectedFilters(state, facet, searchContext).map(f => f.join(','));

    // Delete these parameters as we do not need to see them in the uri
    const modifiedStateFilters = stateFilters.set('contentTypeId', '');

    const currentSearch =
      !term && state.getIn(['routing', 'location', 'search']);

    const currentQs = removeEmptyAttributes(queryString.parse(currentSearch));

    currentQs.orderBy = orderBy;

    const searchTerm = getSearchTerm(state);
    // Use Immutable's merge to merge the stateFilters with any current Qs
    // to build the new Qs.
    const mergedSearch = removeEmptyAttributes(
      fromJS(currentQs)
        .merge(modifiedStateFilters)
        .set('term', searchTerm)
        .toJS()
    );

    if (pageIndex) mergedSearch.pageIndex = pageIndex + 1;
    if (pageIndex === 0) mergedSearch.pageIndex = undefined;
    return queryString.stringify(mergedSearch);
  },
  hash: ({ state }) =>
    state.getIn(['routing', 'location', 'hash'], '#').replace('#', ''),
};

const mapStateToSearchUri = state => mapJson(state, searchUriTemplate);

export default mapStateToSearchUri;
