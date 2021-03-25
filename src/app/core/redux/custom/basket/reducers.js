import { Map, fromJS } from 'immutable';

import { ADD_TO_BASKET, INITIALISED_BASKET } from './types';

let initialState = Map({
  products: fromJS({}),
  isInitialised: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALISED_BASKET:
      if (action.value) {
        return state
          .set('products', fromJS(action.value))
          .set('isInitialised', true);
      } else {
        return state.set('isInitialised', true);
      }
    case ADD_TO_BASKET: {
      return state
        .setIn(['products', action.id, 'product_title'], fromJS(action.title))
        .setIn(['products', action.id, 'quantity'], action.quantity);
    }
    default:
      return state;
  }
};
