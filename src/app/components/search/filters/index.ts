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
        path: 'pot',
        isSelected: false,
      },
      {
        key: 'plant',
        title: 'Plant',
        path: 'plant',
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
};
