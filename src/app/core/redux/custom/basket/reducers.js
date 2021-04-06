import { Map, fromJS } from 'immutable';

// Types
import { ADD_TO_BASKET, REMOVE_FROM_BASKET, INITIALISED_BASKET } from './types';

// Utils
import { _countObjectProperties } from '../../../../utils/countObjectProperties';

let initialState = Map({
  items: fromJS({}),
  isInitialised: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALISED_BASKET:
      if (action.value) {
        return state
          .set('items', fromJS(action.value))
          .set('isInitialised', true);
      } else {
        return state.set('isInitialised', true);
      }
    case ADD_TO_BASKET: {
      const { variantTitle, price, sku } = action.activeVariant;
      const hasSku = !!state.getIn(['items', action.id, sku]);

      if (hasSku) {
        const { quantity, id } = action || {};
        return state.setIn(['items', id, sku, 'quantity'], quantity);
      } else {
        const { quantity, id, productTitle } = action || {};
        const title = `${productTitle} - ${variantTitle}`;
        return state
          .setIn(['items', id, sku, 'title'], title)
          .setIn(['items', id, sku, 'id'], id)
          .setIn(['items', id, sku, 'sku'], sku)
          .setIn(['items', id, sku, 'quantity'], quantity)
          .setIn(['items', id, sku, 'price'], price);
      }
    }
    case REMOVE_FROM_BASKET: {
      const { id, sku } = action || {};
      const currentItemObject = state.getIn(['items', id]).toJS();
      if (_countObjectProperties(currentItemObject) === 1) {
        return state.deleteIn(['items', id]);
      } else {
        return state.deleteIn(['items', id, sku]);
      }
    }
    default:
      return state;
  }
};
