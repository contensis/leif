import { AppState } from '~/redux/AppState';
export const selectActiveVariant = (state: AppState) =>
  state.product.activeVariant;
export const selectActiveVariantMatchingPots = (state: AppState) =>
  state.product.activeVariant?.matchingPots;
export const selectProductReviews = (state: AppState) => state.product.reviews;
