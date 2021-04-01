export const selectActiveVariant = state =>
  state.getIn(['product', 'activeVariant']);
export const selectActiveVariantMatchingPots = state =>
  state.getIn(['product', 'activeVariant', 'matchingPots']);
