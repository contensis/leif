// Import feature sagas to be included with application startup
import { UISagas } from './custom/ui/sagas';

const featureSagas = [...UISagas];

export default featureSagas;
