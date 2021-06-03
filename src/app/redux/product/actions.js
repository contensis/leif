import { action } from '~/core/util/helpers';
import { SET_ACTIVE_VARIANT } from './types';

export const setActiveVariant = value => action(SET_ACTIVE_VARIANT, { value });
