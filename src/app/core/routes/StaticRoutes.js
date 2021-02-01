// import React from 'react';
import Loadable from 'react-loadable';
import { Loading } from './Loading';
import Home from '~/pages/Home/home.page';

export default [
  {
    path: '/',
    exact: true,
    fetchNode: true,
    component: Home,
  },
  {
    path: '/search/:facet?',
    exact: false,
    fetchNode: false,
    component: Loadable({
      loader: () => import('~/pages/Search/search.page'),
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
        import(/* webpackChunkName: "notfound" */ '~/pages/NotFound'),
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
