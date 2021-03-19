import { productCardMapping } from '~/components/search/transformations/entry-to-card-props.mapper';

export const featuredProductMapping = {
  product: {
    ...productCardMapping,
  },
  cardType: 'product.sys.contentTypeId',
  title: 'title',
  text: 'summary',
  linkLabel: 'buttonText',
  linkUri: {
    $path: ['product.sys.uri', 'externalButtonLink'],
    $default: '/shop',
  },
};
