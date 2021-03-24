import { List, Map, fromJS } from 'immutable';

import { ADD_TO_BASKET } from './types';

let initialState = Map(new List([]));

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      return state
        .setIn([fromJS(action.id), 'product-title'], action.title)
        .setIn([fromJS(action.id), action.opt, 'quantity'], action.quantity);
    }
    default:
      return state;
  }
};
