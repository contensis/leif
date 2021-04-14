import { action } from '../../../util/helpers';
import { TOGGLE_MENU, TOGGLE_SECOND_MENU, SET_ACTIVE_MENU } from './types';

export const toggleMenu = value => action(TOGGLE_MENU, { value });
export const toggleSecondMenu = value => action(TOGGLE_SECOND_MENU, { value });
export const setActiveMenu = value => action(SET_ACTIVE_MENU, { value });
