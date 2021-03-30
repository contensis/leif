import { Map, fromJS } from 'immutable';

// Types
import { ADD_TO_BASKET, REMOVE_FROM_BASKET, INITIALISED_BASKET } from './types';

// Utils
import { _countObjectProperties } from '../../../../utils/countObjectProperties';

let initialState = Map({
  products: fromJS({}),
  isInitialised: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALISED_BASKET:
      if (action.value) {
        return state
          .set('products', fromJS(action.value))
          .set('isInitialised', true);
      } else {
        return state.set('isInitialised', true);
      }
    case ADD_TO_BASKET: {
      const { variantTitle, price, sku } = action.activeVariant;
      const hasSku = !!state.getIn(['products', action.id, sku]);

      if (hasSku) {
        const { quantity } = action || {};
        return state.setIn(['products', action.id, sku, 'quantity'], quantity);
      } else {
        const title = `${action.productTitle} - ${variantTitle}`;

        return state
          .setIn(['products', action.id, sku, 'title'], fromJS(title))
          .setIn(['products', action.id, sku, 'id'], action.id)
          .setIn(['products', action.id, sku, 'sku'], sku)
          .setIn(['products', action.id, sku, 'quantity'], action.quantity)
          .setIn(['products', action.id, sku, 'price'], price);
      }
    }
    case REMOVE_FROM_BASKET: {
      const { id, sku } = action || {};
      const currentProductObject = state.getIn(['products', id]).toJS();

      if (_countObjectProperties(currentProductObject) === 1) {
        return state.deleteIn(['products', id]);
      } else {
        return state.deleteIn(['products', id, sku]);
      }
    }
    default:
      return state;
  }
};
