// Import feature sagas to be included with application startup
import { sagas as searchSagas } from '@zengenti/contensis-react-base/search';
import { sagas as formSagas } from 'zengenti-forms-package';
import { UISagas } from './custom/ui/sagas';

const featureSagas = [...UISagas, ...searchSagas, ...formSagas];

export default featureSagas;
