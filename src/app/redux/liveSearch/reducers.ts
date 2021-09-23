import { Draft, produce } from 'immer';

// Types
import { SET_SEARCH_RESULTS, SET_SEARCH_TERM } from './types';

const initialState = {
  searchTerm: '',
  results: [],
};

export default produce((state: Draft<any>, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      state.searchTerm = action.value;
      return;
    case SET_SEARCH_RESULTS:
      state.results = action.value;
      return;
    default:
      return;
  }
}, initialState);
