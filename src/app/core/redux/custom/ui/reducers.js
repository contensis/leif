import { Map } from 'immutable';
import {
  TOGGLE_SEARCH,
  TOGGLE_BASKET,
  TOGGLE_MODAL,
  SET_DEVICE_TYPE,
  SET_SCREEN_SIZE,
  HAS_DROPDOWN_FILTERS_SELECTED,
} from './types';

let initialState = Map({
  screenSize: null,
  device: null,
  isSearchOpen: false,
  isBasketOpen: false,
  isModalOpen: false,
  hasDropdownFiltersSelected: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH:
      return state.setIn(['isSearchOpen'], action.value);
    case TOGGLE_MODAL:
      return state.setIn(['isModalOpen'], action.value);
    case TOGGLE_BASKET:
      return state.setIn(['isBasketOpen'], action.value);
    case SET_DEVICE_TYPE:
      return state.setIn(['device'], action.value);
    case SET_SCREEN_SIZE:
      return state.set('screenSize', action.value);
    case HAS_DROPDOWN_FILTERS_SELECTED:
      return state.set('hasDropdownFiltersSelected', action.value);
    default:
      return state;
  }
};
