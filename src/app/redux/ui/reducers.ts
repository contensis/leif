import { Draft, produce } from 'immer';
import {
  TOGGLE_SEARCH,
  TOGGLE_BASKET,
  TOGGLE_MODAL,
  SET_DEVICE_TYPE,
  SET_SCREEN_SIZE,
  HAS_DROPDOWN_FILTERS_SELECTED,
  TOGGLE_POPUP,
} from './types';

const initialState = {
  screenSize: null,
  device: null,
  isSearchOpen: false,
  isBasketOpen: false,
  isModalOpen: false,
  isPopupOpen: false,
  hasDropdownFiltersSelected: false,
};

export default produce((state: Draft<any>, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH:
      state.isSearchOpen = action.value;
      return;
    case TOGGLE_MODAL:
      state.isModalOpen = action.value;
      return;
    case TOGGLE_POPUP:
      state.isPopupOpen = action.value;
      return;
    case TOGGLE_BASKET:
      state.isBasketOpen = action.value;
      return;
    case SET_DEVICE_TYPE:
      state.device = action.value;
      return;
    case SET_SCREEN_SIZE:
      state.screenSize = action.value;
      return;
    case HAS_DROPDOWN_FILTERS_SELECTED:
      state.hasDropdownFiltersSelected = action.value;
      return;
    default:
      return state;
      return;
  }
}, initialState);
