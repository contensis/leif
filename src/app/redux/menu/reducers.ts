import { Draft, produce } from 'immer';
import { TOGGLE_MENU, TOGGLE_SECOND_MENU } from './types';

const initialState = {
  isMenuOpen: false,
  isSecondMenuOpen: false,
};

export default produce((state: Draft<any>, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      state.isMenuOpen = action.value;
      return;
    case TOGGLE_SECOND_MENU:
      state.isSecondMenuOpen = action.value;
      return;
    default:
      return;
  }
}, initialState);
