import { action } from '~/core/util/helpers';
import { TOGGLE_MENU, TOGGLE_SECOND_MENU } from './types';

export const toggleMenu = value => action(TOGGLE_MENU, { value });
export const toggleSecondMenu = value => action(TOGGLE_SECOND_MENU, { value });
