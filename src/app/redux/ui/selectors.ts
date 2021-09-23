import { createSelector } from 'reselect';
import { AppState } from '~/redux/AppState';

export const selectIsSearchOpen = (state: AppState) => state.ui.isSearchOpen;
export const selectIsBasketOpen = (state: AppState) => state.ui.isBasketOpen;
export const selectIsModalOpen = (state: AppState) => state.ui.isModalOpen;
export const selectIsPopupOpen = (state: AppState) => state.ui.isPopupOpen;

export const selectDeviceType = (state: AppState) => state.ui.device;
export const selectScreenSize = (state: AppState) => state.ui.screenSize;

export const selectProductListingResults = (state: AppState) =>
  state?.search?.listings?.productListing?.results;
export const selectBlogListingResults = (state: AppState) =>
  state?.search?.listings?.blogListing?.results;

export const makeSelectHasResults = () => {
  return createSelector(
    [selectBlogListingResults, selectProductListingResults],
    (results: any) => {
      if (results?.length >= 1) return true;
      else return false;
    }
  );
};

export const selectHasDropdownFiltersSelected = (state: AppState) =>
  state.ui.hasDropdownFiltersSelected;

export const makeSelectDeviceType = () => {
  return createSelector([selectScreenSize], screenSize => {
    if (screenSize <= '480') {
      return 'mobile';
    } else if (screenSize > '480' && screenSize <= '769') {
      return 'tablet';
    } else if (screenSize > '768' && screenSize <= '1025') {
      return 'laptop';
    } else if (screenSize > '1024') {
      return 'desktop';
    }
  });
};
