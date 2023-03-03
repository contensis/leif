import { SearchFilter } from '@zengenti/contensis-react-base/search';
import {
  ContentTypes,
  BlogFilters as Blog,
  ProductFilters as Product,
} from '~/core/schema';

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
  contentTypeId: {
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
  plantType: {
    title: 'Browse plant types',
    contentTypeId: ContentTypes.plantType,
    fieldId: 'type.sys.id',
    isSingleSelect: true,
    items: [],
  },
  colour: {
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
  potSize: {
    title: 'Browse by pot size',
    contentTypeId: ContentTypes.pot,
    fieldId: 'potVariant.internalDiameterCM',
    isSingleSelect: true,
    fieldOperator: 'between',
    items: [
      {
        key: '5-15',
        title: 'Small',
      },
      {
        key: '16-25',
        title: 'Medium',
      },
      {
        key: '26-2000000',
        title: 'Large',
      },
    ],
  },
  plantSize: {
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
} as { [key in keyof typeof Product]: SearchFilter };
