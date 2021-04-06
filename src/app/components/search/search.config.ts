import {
  Listings,
  ContentTypes,
  SearchFacets,
  BaseFields,
  // FreeTextWeights,
  // DefaultWeightedSearchQueryFields,
  ReviewFields,
  Fields,
  BlogFields,
  ContentFields,
  ProductFields,
} from '../../core/schema';

// Filters
import { BlogFilters, ProductFilters } from './filters';

// The config defined here is loaded into initialState
// and is used to drive the how the site search works
export default {
  tabs: [{ id: 0 }],
  facets: {
    [SearchFacets.all]: {
      tabId: 0,
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
    [Listings.product]: {
      title: 'Products',
      projectId: 'leif',
      queryParams: {
        loadMorePaging: true,
        contentTypeIds: [ContentTypes.plant, ContentTypes.pot],
        fields: [...BaseFields, ...ProductFields],
        orderBy: ['-sys.version.published'],
        pageSize: 9,
      },
      filters: ProductFilters,
    },
  },
  minilist: {
    featuredProduct: {
      title: 'Featured Product',
      queryParams: {
        contentTypeIds: [ContentTypes.plant, ContentTypes.pot],
        fields: [...BaseFields, ...ProductFields],
        orderBy: ['-sys.version.published'],
        pageSize: 1,
        linkDepth: 1,
        customWhere: [
          {
            field: 'isFeatured',
            equalTo: true,
          },
        ],
      },
    },
    reviews: {
      title: 'Reviews',
      queryParams: {
        contentTypeIds: [ContentTypes.review],
        fields: [...BaseFields, ...ReviewFields],
        orderBy: ['-sys.version.published'],
        pageSize: 1,
        linkDepth: 2,
        customWhere: [
          {
            field: 'rating',
            equalTo: '5 stars',
          },
        ],
      },
    },
    latestReviews: {
      title: 'Latest reviews',
      queryParams: {
        contentTypeIds: [ContentTypes.review],
        fields: [...BaseFields, ...ReviewFields],
        orderBy: ['-sys.version.published'],
        linkDepth: 2,
        pageSize: 3,
      },
    },
    latestBlogs: {
      title: 'Latest blogs',
      queryParams: {
        contentTypeIds: [ContentTypes.blog],
        fields: [...BaseFields, ...BlogFields],
        orderBy: ['-sys.version.published'],
        pageSize: 3,
      },
    },
  },
};
