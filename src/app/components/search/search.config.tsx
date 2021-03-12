import {
  Listings,
  // ResourceFields,
  ContentTypes,
  RoutingFields,
  // SearchFacets,
  // BaseFields,
  // FreeTextWeights,
  // DefaultWeightedSearchQueryFields,
  // Fields,
  BlogFields,
} from '../../core/schema';

// Filters
import BlogFilters from './filters/blog';

// The config defined here is loaded into initialState
// and is used to drive the how the site search works
export default {
  tabs: [{ id: 0 }],
  facets: {},
  listings: {
    [Listings.blog]: {
      title: 'Blogs',
      projectId: 'leif',
      queryParams: {
        loadMorePaging: true,
        contentTypeIds: [ContentTypes.blog],
        fields: [...RoutingFields, ...BlogFields],
        orderBy: ['-sys.version.published'],
        pageSize: 9,
      },
      filters: BlogFilters,
    },
  },
};
