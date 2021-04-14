import { Map } from 'immutable';
import { TOGGLE_MENU, TOGGLE_SECOND_MENU, SET_ACTIVE_MENU } from './types';

let initialState = Map({
  isMenuOpen: false,
  isSecondMenuOpen: false,
  activeMenu: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return state.setIn(['isMenuOpen'], action.value);
    case TOGGLE_SECOND_MENU:
      return state.setIn(['isSecondMenuOpen'], action.value);
    case SET_ACTIVE_MENU:
      return state.setIn(['activeMenu'], action.value);
    default:
      return state;
  }
};
