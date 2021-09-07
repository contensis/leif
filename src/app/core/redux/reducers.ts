// Import feature reducers to be included with application startup
import { reducer as SearchReducer } from '@zengenti/contensis-react-base/search';
import { config } from '~/components/search';
import UIReducers from '~/redux/ui/reducers';
import MenuReducers from '~/redux/menu/reducers';
import BasketReducers from '~/redux/basket/reducers';
import ProductReducers from '~/redux/product/reducers';
import liveSearchReducers from '~/redux/liveSearch/reducers';

const featureReducers = {
  search: SearchReducer(config),
  ui: UIReducers,
  menu: MenuReducers,
  basket: BasketReducers,
  product: ProductReducers,
  liveSearch: liveSearchReducers,
};

export default { ...featureReducers };
