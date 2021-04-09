import {
  ContentTypes,
  BlogFilters as Blog,
  ProductFilters as Product,
} from '../../../core/schema';

// Blog Listing Filters
export const BlogFilters = {
  [Blog.category]: {
    title: 'Browse by category',
    contentTypeId: ContentTypes.category,
    fieldId: 'category.sys.id',
    isSingleSelect: true,
    items: [],
  },
  [Blog.author]: {
    title: 'Browse by author',
    contentTypeId: ContentTypes.person,
    fieldId: 'author.sys.id',
    isSingleSelect: true,
    items: [],
  },
};

// Product Listing Filters
export const ProductFilters = {
  [Product.contentTypeId]: {
    title: 'Browse product types',
    contentTypeId: [ContentTypes.pot, ContentTypes.plant],
    fieldId: 'sys.contentTypeId',
    isSingleSelect: true,
    items: [
      {
        key: 'pot',
        title: 'Pot',
      },
      {
        key: 'plant',
        title: 'Plant',
      },
    ],
  },
  [Product.plantType]: {
    title: 'Browse plant types',
    contentTypeId: ContentTypes.plantType,
    fieldId: 'type.sys.id',
    isSingleSelect: true,
    items: [],
  },
  [Product.colour]: {
    title: 'Browse by colour',
    contentTypeId: ContentTypes.pot,
    fieldId: 'colour',
    isSingleSelect: true,
    items: [
      {
        key: 'white',
        title: 'White',
      },
      {
        key: 'grey',
        title: 'Grey',
      },
      {
        key: 'brown',
        title: 'Brown',
      },
    ],
  },
  [Product.potSize]: {
    title: 'Browse by pot size',
    contentTypeId: ContentTypes.pot,
    fieldId: 'potVariant.externalHeightCM',
    isSingleSelect: true,
    fieldOperator: 'between',
    items: [
      {
        key: '0-30',
        title: 'Small',
      },
      {
        key: '31-60',
        title: 'Medium',
      },
      {
        key: '61-2000000',
        title: 'Large',
      },
    ],
  },
  [Product.plantSize]: {
    title: 'Browse by plant size',
    contentTypeId: ContentTypes.plant,
    fieldId: 'plantVariant.heightCM',
    isSingleSelect: true,
    fieldOperator: 'between',
    items: [
      {
        key: '0-30',
        title: 'Small',
      },
      {
        key: '31-60',
        title: 'Medium',
      },
      {
        key: '61-2000000',
        title: 'Large',
      },
    ],
  },
};
