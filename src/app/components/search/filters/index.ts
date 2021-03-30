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
  [Product.plantType]: {
    title: 'Browse product types',
    contentTypeId: ContentTypes.plantType,
    fieldId: 'type.sys.id',
    isSelected: false,
    isSingleSelect: true,
    items: [],
  },
};
