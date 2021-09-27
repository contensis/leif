import { AppState } from '~/redux/AppState';
export const selectSearchTerm = (state: AppState) =>
  state.liveSearch.searchTerm;
export const selectSearchResults = (state: AppState) =>
  state.liveSearch.results;
