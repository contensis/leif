import { action } from '../../../util/helpers';
import { TOGGLE_SEARCH, BROWSER_RESIZE } from './types';

export const toggleSearch = value => action(TOGGLE_SEARCH, { value });
export const browserResize = value => action(BROWSER_RESIZE, { value });
