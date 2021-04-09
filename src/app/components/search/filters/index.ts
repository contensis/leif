import {
  ContentTypes,
  BlogFilters as Blog,
  ProductFilters as Product,
} from '../../../core/schema';

export const BlogFilters = {
  [Blog.category]: {
    title: 'Browse by category',
    contentTypeId: ContentTypes.category,
    fieldId: 'category.sys.id',
    isSelected: false,
    isSingleSelect: true,
    items: [],
  },
  [Blog.author]: {
    title: 'Browse by author',
    contentTypeId: ContentTypes.person,
    fieldId: 'author.sys.id',
    isSelected: false,
    isSingleSelect: true,
    items: [],
  },
};

export const ProductFilters = {
  [Product.contentTypeId]: {
    title: 'Browse product types',
    contentTypeId: [ContentTypes.pot, ContentTypes.plant],
    fieldId: 'sys.contentTypeId',
    isSelected: false,
    isSingleSelect: true,
    items: [
      {
        key: 'pot',
        title: 'Pot',
        isSelected: false,
      },
      {
        key: 'plant',
        title: 'Plant',
        isSelected: false,
      },
    ],
  },
  [Product.plantType]: {
    title: 'Browse plant types',
    contentTypeId: ContentTypes.plantType,
    fieldId: 'type.sys.id',
    isSelected: false,
    isSingleSelect: true,
    items: [],
  },
  [Product.colour]: {
    title: 'Browse by colour',
    contentTypeId: ContentTypes.pot,
    fieldId: 'colour',
    isSelected: false,
    isSingleSelect: true,
    items: [
      {
        key: 'white',
        title: 'White',
        isSelected: false,
      },
      {
        key: 'grey',
        title: 'Grey',
        isSelected: false,
      },
      {
        key: 'brown',
        title: 'Brown',
        isSelected: false,
      },
    ],
  },
  [Product.potSize]: {
    title: 'Browse by pot size',
    contentTypeId: ContentTypes.pot,
    fieldId: 'potVariant.externalHeightCM',
    isSelected: false,
    isSingleSelect: true,
    fieldOperator: 'between',
    items: [
      {
        key: '0,30',
        title: 'Small',
        isSelected: false,
      },
      {
        key: '31,60',
        title: 'Medium',
        isSelected: false,
      },
      {
        key: '61,2000000',
        title: 'Large',
        isSelected: false,
      },
    ],
  },
  [Product.plantSize]: {
    title: 'Browse by plant size',
    contentTypeId: ContentTypes.plant,
    fieldId: 'plantVariant.heightCM',
    isSelected: false,
    isSingleSelect: true,
    fieldOperator: 'between',
    items: [
      {
        key: '0-30',
        title: 'Small',
        isSelected: false,
      },
      {
        key: '31-60',
        title: 'Medium',
        isSelected: false,
      },
      {
        key: '61-2000000',
        title: 'Large',
        isSelected: false,
      },
    ],
  },
};
