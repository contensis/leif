//import React from 'react';
import Loadable from 'react-loadable';
import { Loading } from './Loading';

export default [
  {
    contentTypeID: 'homepage',
    component: Loadable({
      loader: () => {
        return import('~/pages/Home/home.page.js');
      },
      loading: Loading,
    }),
  },
  {
    contentTypeID: 'blogPost',
    component: Loadable({
      loader: () => {
        return import('~/pages/BlogPost/BlogPost.page');
      },
      loading: Loading,
    }),
  },
];
