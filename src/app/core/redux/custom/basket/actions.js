import { action } from '../../../util/helpers';
import { ADD_TO_BASKET } from './types';

export const addToBasket = (id, opt, title, quantity) =>
  action(ADD_TO_BASKET, { id, opt, title, quantity });
