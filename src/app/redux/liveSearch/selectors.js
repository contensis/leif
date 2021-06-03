export const selectSearchTerm = state =>
  state.getIn(['liveSearch', 'searchTerm']);
export const selectSearchResults = state =>
  state.getIn(['liveSearch', 'results']);
