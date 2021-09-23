import { AppState } from '~/redux/AppState';
export const selectActiveVariant = (state: AppState) =>
  state.getIn(['product', 'activeVariant']);
export const selectActiveVariantMatchingPots = (state: AppState) =>
  state.getIn(['product', 'activeVariant', 'matchingPots']);
export const selectProductReviews = (state: AppState) =>
  state.getIn(['product', 'reviews']);
