import { action } from '~/core/util/helpers';
import { SET_SEARCH_TERM } from './types';

export const setSearchTerm = value => action(SET_SEARCH_TERM, { value });
