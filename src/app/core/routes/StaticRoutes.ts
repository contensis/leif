import { StaticRoute } from '@zengenti/contensis-react-base';
import {
  BasketPage,
  CheckoutPage,
  CorePages,
  ProductListing,
  SearchPage,
} from '~/dynamic/pages';

const staticRoutes: StaticRoute[] = [
  {
    path: '/search/:facet?/:contentTypeId?',
    exact: true,
    component: SearchPage,
  },
  {
    path: '/products/:contentTypeId?',
    exact: true,
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

export default staticRoutes;
