// Import feature reducers to be included with application startup
import { reducer as SearchReducer } from '@zengenti/contensis-react-base/search';
import { config } from '../../components/search';
import UIReducers from './custom/ui/reducers';
import BasketReducers from './custom/basket/reducers';
import ProductReducers from './custom/product/reducers';

const featureReducers = {
  search: SearchReducer(config),
  ui: UIReducers,
  basket: BasketReducers,
  product: ProductReducers,
};

export default { ...featureReducers };
