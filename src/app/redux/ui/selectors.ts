import { createSelector } from 'reselect';

export const selectIsSearchOpen = (state: any) => state?.ui?.isSearchOpen;
export const selectIsBasketOpen = (state: any) => state?.ui?.isBasketOpen;
export const selectIsModalOpen = (state: any) => state?.ui?.isModalOpen;
export const selectIsPopupOpen = (state: any) => state?.ui?.isPopupOpen;

export const selectDeviceType = (state: any) => state?.ui?.device;
export const selectScreenSize = (state: any) => state?.ui?.screenSize;

export const selectProductListingResults = (state: any) =>
  state?.search?.listings?.productListing?.results;
export const selectBlogListingResults = (state: any) =>
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

export const selectHasDropdownFiltersSelected = (state: any) =>
  state?.ui?.hasDropdownFiltersSelected;

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
