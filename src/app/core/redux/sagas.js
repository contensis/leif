// Import feature sagas to be included with application startup
import { sagas as searchSagas } from '@zengenti/contensis-react-base/search';
import { UISagas } from './custom/ui/sagas';
import { BasketSagas } from './custom/basket/sagas';

const featureSagas = [...searchSagas, ...UISagas, ...BasketSagas];

export default featureSagas;
