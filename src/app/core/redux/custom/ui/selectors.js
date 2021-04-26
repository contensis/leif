import { createSelector } from 'reselect';

export const selectIsSearchOpen = state => state.getIn(['ui', 'isSearchOpen']);
export const selectIsBasketOpen = state => state.getIn(['ui', 'isBasketOpen']);
export const selectIsModalOpen = state => state.getIn(['ui', 'isModalOpen']);
export const selectIsPopupOpen = state => state.getIn(['ui', 'isPopupOpen']);

export const selectDeviceType = state => state.getIn(['ui', 'device']);
export const selectScreenSize = state => state.getIn(['ui', 'screenSize']);

export const selectProductListingResults = state =>
  state.getIn(['search', 'listings', 'productListing', 'results']);
export const selectBlogListingResults = state =>
  state.getIn(['search', 'listings', 'blogListing', 'results']);

export const makeSelectHasResults = () => {
  return createSelector(
    [selectBlogListingResults],
    [selectProductListingResults],
    results => {
      if (results && results.toJS() && results.toJS().length >= 1) return true;
      else return false;
    }
  );
};

export const selectHasDropdownFiltersSelected = state =>
  state.getIn(['ui', 'hasDropdownFiltersSelected']);

export const makeSelectDeviceType = () => {
  return createSelector(
    [selectScreenSize],
    screenSize => {
      if (screenSize <= '480') {
        return 'mobile';
      } else if (screenSize > '480' && screenSize <= '769') {
        return 'tablet';
      } else if (screenSize > '768' && screenSize <= '1025') {
        return 'laptop';
      } else if (screenSize > '1024') {
        return 'desktop';
      }
    }
  );
};
