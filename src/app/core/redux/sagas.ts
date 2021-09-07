// Import feature sagas to be included with application startup
import { sagas as searchSagas } from '@zengenti/contensis-react-base/search';
import { UISagas } from '~/redux/ui/sagas';
import { BasketSagas } from '~/redux/basket/sagas';
import { ProductSagas } from '~/redux/product/sagas';
import { LiveSearchSagas } from '~/redux/liveSearch/sagas';

const featureSagas = [
  ...searchSagas,
  ...UISagas,
  ...BasketSagas,
  ...ProductSagas,
  ...LiveSearchSagas,
];

export default featureSagas;
