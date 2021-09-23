import { Draft, produce } from 'immer';

// Types
import { SET_ACTIVE_VARIANT, SET_PRODUCT_REVIEWS } from './types';

const initialState = {
  activeVariant: {},
  reviews: {},
};

export default produce((state: Draft<any>, action) => {
  switch (action.type) {
    case SET_ACTIVE_VARIANT:
      if (action.value) {
        state.activeVariant = action.value;
      }
      return;
    case SET_PRODUCT_REVIEWS:
      if (action.value) {
        state.reviews = action.value;
      }
      return;
    default:
      return state;
      return;
  }
}, initialState);
