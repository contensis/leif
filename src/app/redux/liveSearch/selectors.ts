import { AppState } from '~/redux/AppState';
export const selectSearchTerm = (state: AppState) =>
  state.getIn(['liveSearch', 'searchTerm']);
export const selectSearchResults = (state: AppState) =>
  state.getIn(['liveSearch', 'results']);
