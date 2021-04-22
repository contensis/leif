export const selectProductsInBasket = state => state.getIn(['basket', 'items']);
export const selectTotalProductsInBasket = state => state.getIn(['basket', 'total']);
