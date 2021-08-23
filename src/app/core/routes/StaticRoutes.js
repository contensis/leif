import {
  BasketPage,
  CheckoutPage,
  CorePages,
  ProductListing,
  SearchPage,
} from '~/dynamic/pages';

export default [
  {
    path: '/search/:facet?/:contentTypeId?',
    exact: false,
    component: SearchPage,
  },
  {
    path: '/products/:contentTypeId?',
    fetchNode: true,
    component: ProductListing,
  },
  {
    path: '/basket',
    exact: false,
    component: BasketPage,
  },
  {
    path: '/checkout',
    exact: false,
    component: CheckoutPage,
  },
  // ********************************
  // ˅˅ Do not delete these routes ˅˅
  {
    path: '/404',
    component: CorePages[404],
  },
  {
    path: '/zenInfo',
    ssrOnly: true,
    component: CorePages.ZenInfo,
  },
  // ˄˄ Do not delete these routes ˄˄
  // ********************************
];
