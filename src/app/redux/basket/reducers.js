import { Map, fromJS } from 'immutable';

// Types
import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  UPDATE_QUANTITY,
  INITIALISED_BASKET,
} from './types';

// Utils
import { _countObjectProperties } from '~/utils/countObjectProperties';

let initialState = Map({
  items: fromJS({}),
  totalPrice: 0,
  totalItems: 0,
  isInitialised: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALISED_BASKET:
      if (action.value) {
        return state
          .set('items', fromJS(action.value))
          .set('totalItems', fromJS(action.totalItems))
          .set('totalPrice', fromJS(action.totalPrice))
          .set('isInitialised', true);
      } else {
        return state.set('isInitialised', true);
      }
    case UPDATE_QUANTITY: {
      const { id, sku, price, quantity, updateType } = action;

      let prevQuantity = state.getIn(['items', id, sku, 'quantity']);
      const newQuantity =
        updateType === 'minus'
          ? prevQuantity - quantity
          : updateType === 'plus'
          ? quantity - prevQuantity
          : quantity;

      let currentTotalPrice = state.get('totalPrice');
      const totalPrice =
        updateType === 'minus'
          ? (currentTotalPrice -= price * newQuantity)
          : updateType === 'plus'
          ? (currentTotalPrice += price * newQuantity)
          : currentTotalPrice - price * prevQuantity + price * newQuantity;

      let currentTotalItems = state.get('totalItems');
      const totalItems =
        updateType === 'minus'
          ? (currentTotalItems -= newQuantity)
          : updateType === 'plus'
          ? (currentTotalItems += newQuantity)
          : currentTotalItems - prevQuantity + newQuantity;

      return state
        .setIn(['items', id, sku, 'quantity'], quantity)
        .set('totalItems', totalItems)
        .set('totalPrice', totalPrice);
    }
    case ADD_TO_BASKET: {
      const { variantTitle, price, sku } = action.activeVariant;
      const hasSku = !!state.getIn(['items', action.id, sku]);
      let currentTotalItems = state.get('totalItems');
      let currentTotalPrice = state.get('totalPrice');

      if (hasSku) {
        const { quantity, id } = action || {};
        const totalItems = (currentTotalItems += quantity);
        let prevQuantity = state.getIn(['items', id, sku, 'quantity']);
        const total = prevQuantity ? (prevQuantity += quantity) : quantity;
        const totalPrice = (currentTotalPrice += price * quantity);

        return state
          .setIn(['items', id, sku, 'quantity'], total)
          .set('totalItems', totalItems)
          .set('totalPrice', totalPrice);
      } else {
        const { quantity, id, productTitle, imageUri } = action || {};
        const totalItems = (currentTotalItems += quantity);
        const totalPrice = (currentTotalPrice += price * quantity);

        return state
          .setIn(['items', id, sku, 'title'], productTitle)
          .setIn(['items', id, sku, 'variant'], variantTitle)
          .setIn(['items', id, sku, 'id'], id)
          .setIn(['items', id, sku, 'imageUri'], imageUri)
          .setIn(['items', id, sku, 'sku'], sku)
          .setIn(['items', id, sku, 'quantity'], quantity)
          .setIn(['items', id, sku, 'price'], price)
          .set('totalItems', totalItems)
          .set('totalPrice', totalPrice);
      }
    }
    case REMOVE_FROM_BASKET: {
      const { id, sku, quantity, price } = action || {};
      let currentTotalItems = state.get('totalItems');
      const totalItems = (currentTotalItems -= quantity);
      const currentItemObject = state.getIn(['items', id]).toJS();

      let currentTotalPrice = state.get('totalPrice');
      let totalPrice = (currentTotalPrice -= price * quantity);
      totalPrice = Math.sign(totalPrice) === -1 ? 0 : totalPrice;

      if (_countObjectProperties(currentItemObject) === 1) {
        return state
          .deleteIn(['items', id])
          .set('totalItems', totalItems)
          .set('totalPrice', totalPrice);
      } else {
        return state
          .deleteIn(['items', id, sku])
          .set('totalPrice', totalPrice)
          .set('totalItems', totalItems);
      }
    }
    default:
      return state;
  }
};
