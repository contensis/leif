export const selectIsSecondMenuOpen = state =>
  state.getIn(['menu', 'isSecondMenuOpen']);
export const selectIsMenuOpen = state => state.getIn(['menu', 'isMenuOpen']);
