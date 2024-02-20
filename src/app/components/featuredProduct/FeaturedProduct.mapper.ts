import mapJson from '~/core/util/json-mapper';
import { ProductCardMapping } from '~/components/search/transformations/entry-to-card-props.mapper';

export const FeaturedProductMapping = {
  product: {
    $path: 'product',
    $formatting: (product: any) => mapJson(product, ProductCardMapping),
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
