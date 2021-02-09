// Import feature sagas to be included with application startup
import { sagas as searchSagas } from '@zengenti/contensis-react-base/search';
import { UISagas } from './custom/ui/sagas';

const featureSagas = [...UISagas, ...searchSagas];

export default featureSagas;
