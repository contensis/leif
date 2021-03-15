import {
  Listings,
  ContentTypes,
  SearchFacets,
  BaseFields,
  // FreeTextWeights,
  // DefaultWeightedSearchQueryFields,
  Fields,
  BlogFields,
  ContentFields,
} from '../../core/schema';

// Filters
import BlogFilters from './filters/blog';

// The config defined here is loaded into initialState
// and is used to drive the how the site search works
export default {
  tabs: [{ id: 0 }],
  facets: {
    [SearchFacets.all]: {
      // tabId: 0,
      title: 'All results',
      projectId: 'leif',
      queryParams: {
        loadMorePaging: true,
        contentTypeIds: [
          ContentTypes.blog,
          ContentTypes.contentPage,
          ContentTypes.product,
        ],
        fields: [...BaseFields, ...BlogFields, ...ContentFields],
        orderBy: [Fields.entryTitle],
        linkDepth: 1,
        pageSize: 10,
        // weightedSearchFields: [...weightedFieldsBase],
      },
      filters: {},
    },

    [SearchFacets.blog]: {
      title: 'Blogs',
      queryParams: {
        loadMorePaging: true,
        contentTypeIds: [ContentTypes.blog],
        fields: [...BaseFields, ...BlogFields],
        orderBy: [Fields.entryTitle],
        linkDepth: 1,
        pageSize: 10,
        // weightedSearchFields: [...WeightedFields.base],
      },
      filters: BlogFilters,
    },
  },
  listings: {
    [Listings.blog]: {
      title: 'Blogs',
      projectId: 'leif',
      queryParams: {
        loadMorePaging: true,
        contentTypeIds: [ContentTypes.blog],
        fields: [...BaseFields, ...BlogFields],
        orderBy: ['-sys.version.published'],
        pageSize: 9,
      },
      filters: BlogFilters,
    },
  },
};
