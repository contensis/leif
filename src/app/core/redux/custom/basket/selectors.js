export const selectProductsInBasket = state =>
  state.getIn(['basket', 'products']);
