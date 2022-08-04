import {
  SearchConfig,
  SearchFacet,
} from '@zengenti/contensis-react-base/search';
import {
  Listings,
  ContentTypes,
  SearchFacets,
  BaseFields,
  ReviewFields,
  BlogFields,
  ContentFields,
  ProductFields,
} from '~/core/schema';

// Filters
import { BlogFilters, ProductFilters } from './filters';

// Weighted Fields
import { base as WeightedFields } from '../weightedFields.config';

// The config defined here is loaded into initialState
// and is used to drive the how the site search works
export default {
  tabs: [{ id: 0, label: '' }],
  facets: {
    all: {
      title: 'All results',
      queryParams: {
        loadMorePaging: true,
        contentTypeIds: [
          ContentTypes.blog,
          ContentTypes.contentPage,
          ContentTypes.landingPage,
          ContentTypes.plant,
          ContentTypes.pot,
        ],
        featuredResults: {
          contentTypeId: [ContentTypes.plant, ContentTypes.pot],
          count: 3,
          fieldId: 'tags.entryTitle',
          fieldValue: 'promoted',
        },
        fields: [
          ...BaseFields,
          ...BlogFields,
          ...ProductFields,
          ...ContentFields,
        ],
        linkDepth: 1,
        pageSize: 10,
        weightedSearchFields: [...WeightedFields],
      },
      filters: {},
    },
    blog: {
      title: 'Blogs',
      queryParams: {
        loadMorePaging: true,
        contentTypeIds: [ContentTypes.blog],
        fields: [...BaseFields, ...BlogFields],
        pageSize: 10,
        weightedSearchFields: [...WeightedFields],
      },
      filters: BlogFilters,
    },
    product: {
      title: 'Product',
      queryParams: {
        loadMorePaging: true,
        contentTypeIds: [ContentTypes.plant, ContentTypes.pot],
        fields: [...BaseFields, ...ProductFields],
        pageSize: 10,
        weightedSearchFields: [...WeightedFields],
      },
      filters: ProductFilters,
    },
  } as { [key in keyof typeof SearchFacets]: SearchFacet },
  listings: {
    [Listings.blog]: {
      title: 'Blogs',
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
            field: 'tags.entryTitle',
            equalTo: 'promoted',
          },
        ],
      },
    },
    featuredProducts: {
      title: 'Featured Product',
      queryParams: {
        contentTypeIds: [ContentTypes.plant, ContentTypes.pot],
        fields: [...BaseFields, ...ProductFields],
        orderBy: ['-sys.version.published'],
        pageSize: 3,
        linkDepth: 1,
        customWhere: [
          {
            field: 'tags.entryTitle',
            equalTo: 'promoted',
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
    exploreMore: {
      title: 'Explore more',
      queryParams: {
        contentTypeIds: [
          ContentTypes.blog,
          ContentTypes.contentPage,
          ContentTypes.landingPage,
          ContentTypes.plant,
          ContentTypes.pot,
        ],
        fields: [
          ...BaseFields,
          ...BlogFields,
          ...ProductFields,
          ...ContentFields,
        ],
        orderBy: ['-sys.version.published'],
        pageSize: 4,
        customWhere: [
          {
            field: 'tags.entryTitle',
            equalTo: 'promoted',
          },
        ],
      },
    },
  },
} as SearchConfig;
