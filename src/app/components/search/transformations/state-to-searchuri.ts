import deepmerge from 'deepmerge';
import queryString from 'query-string';
import {
  selectors,
  SearchTransformations,
} from '@zengenti/contensis-react-base/search';

import { default as mapJson } from '~/core/util/json-mapper';
import { removeEmptyAttributes } from '~/core/util/helpers';
import { selectCurrentPath } from '~/core/redux/selectors';

const {
  getSelectedFilters,
  getSearchTerm,
  getSearchContext,
  getCurrentFacet,
  getCurrentListing,
} = selectors;

const searchUriTemplate = {
  path: ({ state, facet }: any) => {
    const context = getSearchContext(state);
    const currentPath = selectCurrentPath(state) || '/search';
    const listing = getCurrentListing(state);

    if (context !== 'listings') {
      const currentFacet = facet || getCurrentFacet(state);

      // Get the Plant or Pot filter
      const filters = getSelectedFilters(state, facet, context);
      const currentFilter = filters.contentTypeId;

      // Check if we have a Plant or Pot filter first
      const newPath =
        currentFilter?.length > 0 && currentFacet
          ? `${currentPath}/${currentFacet}/${currentFilter}`
          : currentFacet
          ? `${currentPath}/${currentFacet}`
          : currentPath;

      return newPath;
    } else if (listing === 'productsListing') {
      const filters = getSelectedFilters(state, facet, context);

      const currentFilter = filters.contentTypeId;

      const newPath =
        currentFilter && currentFilter.length >= 1
          ? `${currentPath}/${currentFilter}`
          : currentPath;

      return newPath;
    } else {
      return currentPath;
    }
  },
  search: ({ state, facet, orderBy, term }: any) => {
    const searchContext = getSearchContext(state);
    // Lose stateFilters and currentSearch if a new
    // term is passed via an argument
    const stateFilters = term
      ? {}
      : Object.fromEntries(
          Object.entries(getSelectedFilters(state, facet, searchContext)).map(
            ([k, f]: [string, any]) => [k, f.join(',')]
          )
        );

    // Delete these parameters as we do not need to see them in the uri
    const { contentTypeId } = stateFilters || {};

    if (contentTypeId === 'pot') {
      stateFilters.plantType = '';
      stateFilters.plantSize = '';
      stateFilters.contentTypeId = '';
    } else if (contentTypeId === 'plant') {
      stateFilters.colour = '';
      stateFilters.potSize = '';
      stateFilters.contentTypeId = '';
    }

    const currentSearch = !term && state.routing.location.search;

    const currentQs = removeEmptyAttributes(queryString.parse(currentSearch));

    currentQs.orderBy = orderBy;

    const searchTerm = getSearchTerm(state);

    // Merge the selectedFilters with any current query to build the next querystring.
    const nextQueryString = removeEmptyAttributes(
      deepmerge(currentQs, stateFilters)
    );
    // Add the search term from state
    if (searchTerm || typeof term !== 'undefined')
      nextQueryString.term = searchTerm;

    // return the next querystring object as a string
    return queryString.stringify(nextQueryString);
  },
  hash: ({ state }: any) =>
    (state.routing.location.hash || '#').replace('#', ''),
};

const mapStateToSearchUri: SearchTransformations['navigate'] = state =>
  mapJson(state, searchUriTemplate);

export default mapStateToSearchUri;
