import { action } from '../../../util/helpers';
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from './types';

export const addToBasket = (id, productTitle, quantity, activeVariant) =>
  action(ADD_TO_BASKET, { id, productTitle, quantity, activeVariant });

export const removeFromBasket = (id, sku, quantity) =>
  action(REMOVE_FROM_BASKET, { id, sku, quantity });
