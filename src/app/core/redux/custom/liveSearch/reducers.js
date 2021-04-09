import { Map, fromJS } from 'immutable';

// Types
import { SET_SEARCH_RESULTS, SET_SEARCH_TERM } from './types';

let initialState = Map({
  searchTerm: '',
  results: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return state.setIn(['searchTerm'], fromJS(action.value));
    case SET_SEARCH_RESULTS:
      return state.setIn(['results'], fromJS(action.value));
    default:
      return state;
  }
};
