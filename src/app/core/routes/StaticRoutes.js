// import React from 'react';
import Loadable from 'react-loadable';
import { Loading } from './Loading';

export default [
  {
    path: '/search/:facet?',
    exact: false,
    fetchNode: false,
    component: Loadable({
      loader: () => import('~/pages/Search/Search.page'),
      loading: Loading,
    }),
  },
  {
    path: '/products/:contentTypeId?',
    exact: true,
    fetchNode: true,
    component: Loadable({
      loader: () => import('~/pages/ProductListing/ProductListing.page'),
      loading: Loading,
    }),
  },
  // ********************************
  // ˅˅ Do not delete these routes ˅˅
  {
    path: '/404',
    exact: true,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "notfound" */ '~/pages/NotFound.js'),
      loading: Loading,
    }),
  },
  {
    path: '/zenInfo',
    exact: true,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "zeninfo" */ '~/pages/VersionInfo'),
      loading: Loading,
    }),
  },
  // ˄˄ Do not delete these routes ˄˄
  // ********************************
];
