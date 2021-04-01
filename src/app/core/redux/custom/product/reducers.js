import { Map, fromJS } from 'immutable';

// Types
import { SET_ACTIVE_VARIANT } from './types';

let initialState = Map({
  activeVariant: fromJS({}),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_VARIANT:
      return state.set('activeVariant', fromJS(action.value));
    default:
      return state;
  }
};
