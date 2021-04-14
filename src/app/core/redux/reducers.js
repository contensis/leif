// Import feature reducers to be included with application startup
import { reducer as SearchReducer } from '@zengenti/contensis-react-base/search';
import { config } from '../../components/search';
import UIReducers from './custom/ui/reducers';
import MenuReducers from './custom/menu/reducers';
import BasketReducers from './custom/basket/reducers';
import ProductReducers from './custom/product/reducers';
import liveSearchReducers from './custom/liveSearch/reducers';

const featureReducers = {
  search: SearchReducer(config),
  ui: UIReducers,
  menu: MenuReducers,
  basket: BasketReducers,
  product: ProductReducers,
  liveSearch: liveSearchReducers,
};

export default { ...featureReducers };
