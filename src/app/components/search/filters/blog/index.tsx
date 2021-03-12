import { ContentTypes, BlogFilters } from '../../../../core/schema';

export default {
  [BlogFilters.category]: {
    title: 'Browse by category',
    contentTypeId: ContentTypes.category,
    fieldId: 'category.sys.id',
    isSelected: false,
    items: [],
  },
  [BlogFilters.author]: {
    title: 'Browse by author',
    contentTypeId: ContentTypes.person,
    fieldId: 'author.sys.id',
    isSelected: false,
    items: [],
  },
};
