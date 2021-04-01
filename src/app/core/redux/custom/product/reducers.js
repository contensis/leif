import { Map, fromJS } from 'immutable';

// Types
import { SET_ACTIVE_VARIANT, SET_PRODUCT_REVIEWS } from './types';

let initialState = Map({
  activeVariant: fromJS({}),
  reviews: fromJS({}),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_VARIANT:
      if (action.value) {
        return state.setIn(['activeVariant'], fromJS(action.value));
      }
      return state;
    case SET_PRODUCT_REVIEWS:
      if (action.value) {
        return state.setIn(['reviews'], fromJS(action.value));
      }
      return state;
    default:
      return state;
  }
};
