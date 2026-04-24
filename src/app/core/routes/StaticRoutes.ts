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
    component: SearchPage,
  },
  {
    path: '/products/:contentTypeId?',
    fetchNode: true,
    component: ProductListing,
  },
  {
    path: '/basket',
    component: BasketPage,
  },
  {
    path: '/checkout',
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
