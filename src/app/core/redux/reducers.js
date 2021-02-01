// Import feature reducers to be included with application startup
import { reducer as SearchReducer } from '@zengenti/contensis-react-base/search';
import UIReducers from './custom/ui/reducers';
import { config } from '~/features/search';
import { reducer as FormsReducer } from 'zengenti-forms-package';
// const featureReducers = { form: FormsReducer, alerts: AlertReducer };

const featureReducers = {
  ui: UIReducers,
  search: SearchReducer(config),
  form: FormsReducer,
};

export default { ...featureReducers };
