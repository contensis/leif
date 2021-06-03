import { action } from '~/core/util/helpers';
import { ADD_TO_BASKET, REMOVE_FROM_BASKET, UPDATE_QUANTITY } from './types';

export const addToBasket = (
  id,
  imageUri,
  productTitle,
  quantity,
  activeVariant
) =>
  action(ADD_TO_BASKET, {
    id,
    imageUri,
    productTitle,
    quantity,
    activeVariant,
  });

export const removeFromBasket = (id, sku, quantity, price) =>
  action(REMOVE_FROM_BASKET, { id, sku, quantity, price });

export const updateQuantity = (id, sku, price, quantity, updateType) =>
  action(UPDATE_QUANTITY, { id, sku, price, quantity, updateType });
