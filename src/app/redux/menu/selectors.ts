import { AppState } from '~/redux/AppState';
export const selectIsSecondMenuOpen = (state: AppState) =>
  state.menu.isSecondMenuOpen;
export const selectIsMenuOpen = (state: AppState) => state.menu.isMenuOpen;
