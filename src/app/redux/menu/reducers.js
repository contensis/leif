import { Map } from 'immutable';
import { TOGGLE_MENU, TOGGLE_SECOND_MENU } from './types';

let initialState = Map({
  isMenuOpen: false,
  isSecondMenuOpen: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return state.setIn(['isMenuOpen'], action.value);
    case TOGGLE_SECOND_MENU:
      return state.setIn(['isSecondMenuOpen'], action.value);
    default:
      return state;
  }
};
