import { action } from '~/core/util/helpers';
import {
  TOGGLE_SEARCH,
  TOGGLE_BASKET,
  BROWSER_RESIZE,
  HAS_DROPDOWN_FILTERS_SELECTED,
  TOGGLE_MODAL,
  TOGGLE_POPUP,
} from './types';

export const setIsSearchOpen = value => action(TOGGLE_SEARCH, { value });
export const setIsBasketOpen = value => action(TOGGLE_BASKET, { value });
export const setIsModalOpen = value => action(TOGGLE_MODAL, { value });
export const setIsPopupOpen = value => action(TOGGLE_POPUP, { value });
export const browserResize = value => action(BROWSER_RESIZE, { value });
export const setHasDropdownFiltersSelected = value =>
  action(HAS_DROPDOWN_FILTERS_SELECTED, { value });
