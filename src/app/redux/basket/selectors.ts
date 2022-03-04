import { AppState } from '~/redux/AppState';

export const selectProductsInBasket = (state: AppState) => state.basket.items;
export const selectTotalProductsPrice = (state: AppState) =>
  state.basket.totalPrice;
export const selectTotalProductsInBasket = (state: AppState) =>
  state.basket.totalItems;
export const selectMatchingProducts = (state: AppState) =>
  state.basket.matchingProducts;
