// Import feature reducers to be included with application startup
import UIReducers from './custom/ui/reducers';
import BasketReducers from './custom/basket/reducers';
import { reducer as SearchReducer } from '@zengenti/contensis-react-base/search';
import { config } from '../../components/search';

const featureReducers = {
  search: SearchReducer(config),
  ui: UIReducers,
  basket: BasketReducers,
};

export default { ...featureReducers };
