export const selectIsSecondMenuOpen = state =>
  state.getIn(['menu', 'isSecondMenuOpen']);
export const selectIsMenuOpen = state => state.getIn(['menu', 'isMenuOpen']);
export const selectActiveMenu = state => state.getIn(['menu', 'activeMenu']);
