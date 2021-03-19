import { productCardMapping } from '~/components/search/transformations/entry-to-card-props.mapper';

export const featuredProductMapping = {
  product: {
    ...productCardMapping,
  },
  cardType: 'product.sys.contentTypeId',
  linkUri: 'externalButtonLink',
  linkLabel: 'buttonText',
  title: 'title',
  text: 'summary',
  link: ['product.sys.uri', 'externalButtonLink', '/shop'],
};
