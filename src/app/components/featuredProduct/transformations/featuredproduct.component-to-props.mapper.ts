import { productCardMapping } from '~/components/search/transformations/entry-to-card-props.mapper';
import mapJson from '~/core/util/json-mapper';

export const featuredProductMapping = {
  product: {
    $path: 'product',
    $formatting: (product: any) => mapJson(product, productCardMapping),
  },
  cardType: 'product.sys.contentTypeId',
  title: 'title',
  text: 'summary',
  linkLabel: 'buttonLabel',
  linkUri: {
    $path: 'product.sys.uri',
    $default: () => '/products',
  },
};
