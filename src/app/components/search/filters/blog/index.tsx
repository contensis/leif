import { ContentTypes, BlogFilters } from '../../../../core/schema';

export default {
  [BlogFilters.category]: {
    title: 'Browse by category',
    contentTypeId: ContentTypes.category,
    fieldId: 'category.sys.id',
    isSelected: false,
    isSingleSelect: true,
    items: [],
  },
  [BlogFilters.author]: {
    title: 'Browse by author',
    contentTypeId: ContentTypes.person,
    fieldId: 'author.sys.id',
    isSelected: false,
    isSingleSelect: true,
    items: [],
  },
  [BlogFilters.date]: {
    title: 'Browse by date published',
    fieldId: 'sys.published',
    isSelected: false,
    items: [],
  },
};
