// import { Listings, ContentTypes, Filters } from '~/core/schema';
import {
  BaseFields,
  ArticleFields,
  SearchFilters,
  Fields,
  ContentTypes,
  Listings,
} from '~/core/schema';
import * as WeightedFields from './weightedFields.config';

const orderBy = [`-${Fields.publishedDate}`, Fields.entryTitle];

const searchFilter = {
  [SearchFilters.category]: {
    title: 'Category',
    fieldId: Fields.categoryId,
    contentTypeId: [ContentTypes.category],
    items: [],
    isSingleSelect: false,
    isGrouped: true,
  },
};

export default {
  tabs: [{ id: 0 }],
  facets: {
    all: {
      title: 'All results',
      queryParams: {
        contentTypeIds: ['article'],
        fields: [...BaseFields, ...ArticleFields],
        linkDepth: 1,
        orderBy,
        pageSize: 9,
        weightedSearchFields: [...WeightedFields.base],
      },
      filters: searchFilter,
    },
  },
  listings: {
    [Listings.categoryArticles]: {
      title: 'Articles by category',
      queryParams: {
        contentTypeIds: ['article'],
        customWhere: [{ field: 'sys.uri', exists: true }],
        fields: [],
        linkDepth: 2,
        orderBy,
        pageSize: 9,
      },
      filters: searchFilter,
    },
  },

  minilist: {
    categoryArticles: {
      title: 'Category articles',
      queryParams: {
        contentTypeIds: ['article'],
        fields: [...BaseFields, ...ArticleFields],
        linkDepth: 1,
        orderBy,
        pageSize: 20,
        weightedSearchFields: [...WeightedFields.base],
      },
      filters: {
        [SearchFilters.category]: {
          title: 'Category',
          fieldId: Fields.categoryId,
          contentTypeId: [ContentTypes.category],
          items: [],
          isSingleSelect: false,
          isGrouped: true,
        },
      },
    },
    // latestArticles: {
    //   title: 'Latest Articles',
    //   projectId: 'projectId',
    //   queryParams: {
    //     contentTypeIds: ['article'],
    //     fields: [...BaseFields, ...ArticleFields],
    //     orderBy: ['-sys.version.published'],
    //     pageSize: 4,
    //     customWhere: [
    //       {
    //         not: {
    //           field: 'featured',
    //           equalTo: true,
    //         },
    //       },
    //     ],
    //   },
    // },
  },
};
