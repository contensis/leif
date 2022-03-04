import { Draft, produce } from 'immer';

// Types
import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  UPDATE_QUANTITY,
  UPDATE_MATCHING_PRODUCTS,
  INITIALISED_BASKET,
} from './types';

// Utils
import { _countObjectProperties } from '~/utils/countObjectProperties';

const initialState = {
  items: {},
  totalPrice: 0,
  totalItems: 0,
  matchingProducts: [],
  isInitialised: false,
};

export default produce((state: Draft<any>, action) => {
  switch (action.type) {
    case INITIALISED_BASKET: {
      if (action.value) {
        state.items = action.value;
        state.totalItems = action.totalItems;
        state.totalPrice = action.totalPrice;
        state.matchingProducts = action.matchingProducts;
      }

      state.isInitialised = true;
      return;
    }
    case UPDATE_QUANTITY: {
      const { id, sku, price, quantity, updateType } = action;

      const prevQuantity = state.items[id]?.[sku]?.quantity || 0;
      const newQuantity =
        updateType === 'minus'
          ? prevQuantity - quantity
          : updateType === 'plus'
          ? quantity - prevQuantity
          : quantity;

      let currentTotalPrice = state.totalPrice;
      const totalPrice =
        updateType === 'minus'
          ? (currentTotalPrice -= price * newQuantity)
          : updateType === 'plus'
          ? (currentTotalPrice += price * newQuantity)
          : currentTotalPrice - price * prevQuantity + price * newQuantity;

      let currentTotalItems = state.totalItems;
      const totalItems =
        updateType === 'minus'
          ? (currentTotalItems -= newQuantity)
          : updateType === 'plus'
          ? (currentTotalItems += newQuantity)
          : currentTotalItems - prevQuantity + newQuantity;

      state.items[id][sku].quantity = quantity;
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
      return;
    }
    case ADD_TO_BASKET: {
      const { variantTitle, price, sku } = action.activeVariant;
      const hasSku = !!state.items[action.id]?.[sku];
      let currentTotalItems = state.totalItems;
      let currentTotalPrice = state.totalPrice;

      if (hasSku) {
        const { quantity, id } = action || {};
        const totalItems = (currentTotalItems += quantity);
        let prevQuantity = state.items[id]?.[sku]?.quantity || 0;
        const total = prevQuantity ? (prevQuantity += quantity) : quantity;
        const totalPrice = (currentTotalPrice += price * quantity);

        state.items[id][sku].quantity = total;
        state.totalItems = totalItems;
        state.totalPrice = totalPrice;
      } else {
        const { quantity, id, productTitle, imageUri } = action || {};
        const totalItems = (currentTotalItems += quantity);
        const totalPrice = (currentTotalPrice += price * quantity);

        const basketItem = {
          [sku]: {
            title: productTitle,
            variant: variantTitle,
            id,
            imageUri,
            sku,
            quantity,
            price,
          },
        };
        state.items[id] = basketItem;
        state.totalItems = totalItems;
        state.totalPrice = totalPrice;
      }
      return;
    }
    case REMOVE_FROM_BASKET: {
      const { id, sku, quantity, price } = action || {};
      let currentTotalItems = state.totalItems;
      const totalItems = (currentTotalItems -= quantity);
      const currentItemObject = state.items[id];

      let currentTotalPrice = state.totalPrice;
      let totalPrice = (currentTotalPrice -= price * quantity);
      totalPrice = Math.sign(totalPrice) === -1 ? 0 : totalPrice;

      if (_countObjectProperties(currentItemObject) === 1) {
        delete state.items[id];
      } else {
        delete state.items[id][sku];
      }
      delete state.matchingProducts;

      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
      return;
    }
    case UPDATE_MATCHING_PRODUCTS: {
      const { matchingProducts } = action || {};
      if (matchingProducts && matchingProducts.length > 0)
        state.matchingProducts = matchingProducts;

      return;
    }
    default:
      return;
  }
}, initialState);
