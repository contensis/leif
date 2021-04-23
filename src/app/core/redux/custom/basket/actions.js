import { action } from '../../../util/helpers';
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from './types';

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
