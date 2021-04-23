export const selectProductsInBasket = state => state.getIn(['basket', 'items']);
export const selectTotalProductsPrice = state =>
  state.getIn(['basket', 'totalPrice']);
export const selectTotalProductsInBasket = state =>
  state.getIn(['basket', 'totalItems']);
