import { Map, fromJS } from 'immutable';

// Types
import { ADD_TO_BASKET, REMOVE_FROM_BASKET, INITIALISED_BASKET } from './types';

// Utils
import { _countObjectProperties } from '../../../../utils/countObjectProperties';

let initialState = Map({
  items: fromJS({}),
  total: 0,
  isInitialised: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALISED_BASKET:
      if (action.value) {
        return state
          .set('items', fromJS(action.value))
          .set('total', fromJS(action.total))
          .set('isInitialised', true);
      } else {
        return state.set('isInitialised', true);
      }
    case ADD_TO_BASKET: {
      const { variantTitle, price, sku } = action.activeVariant;
      const hasSku = !!state.getIn(['items', action.id, sku]);
      let currentTotalItems = state.get('total');

      if (hasSku) {
        const { quantity, id } = action || {};
        const totalItems = (currentTotalItems += quantity);

        let previousQuantity = state.getIn(['items', id, sku, 'quantity']);
        const newQuantity = previousQuantity
          ? (previousQuantity += quantity)
          : quantity;

        return state
          .setIn(['items', id, sku, 'quantity'], newQuantity)
          .set('total', totalItems);
      } else {
        const { quantity, id, productTitle, imageUri } = action || {};
        const totalItems = (currentTotalItems += quantity);

        return state
          .setIn(['items', id, sku, 'title'], productTitle)
          .setIn(['items', id, sku, 'variant'], variantTitle)
          .setIn(['items', id, sku, 'id'], id)
          .setIn(['items', id, sku, 'imageUri'], imageUri)
          .setIn(['items', id, sku, 'sku'], sku)
          .setIn(['items', id, sku, 'quantity'], quantity)
          .setIn(['items', id, sku, 'price'], price)
          .set('total', totalItems);
      }
    }
    case REMOVE_FROM_BASKET: {
      const { id, sku, quantity } = action || {};

      let currentTotalItems = state.get('total');
      const totalItems = (currentTotalItems -= quantity);

      const currentItemObject = state.getIn(['items', id]).toJS();
      if (_countObjectProperties(currentItemObject) === 1) {
        return state.deleteIn(['items', id]).set('total', totalItems);
      } else {
        return state.deleteIn(['items', id, sku]).set('total', totalItems);
      }
    }
    default:
      return state;
  }
};
