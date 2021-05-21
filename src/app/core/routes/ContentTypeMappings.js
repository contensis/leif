import Loadable from 'react-loadable';
import { Loading } from './Loading';

import mapJson from '../../core/util/json-mapper';

// Mappings
import { contentPagePropsMapping } from '../../pages/ContentPage/transformations/contentpage.entry-to-props.mapper';
import { landingPagePropsMapping } from '../../pages/LandingPage/transformations/landingpage.entry-to-props.mapper';
import { blogPostPropsMapping } from '../../pages/BlogPost/transformations/blogpost.entry-to-props.mapper';
import { blogListingPropsMapping } from '../../pages/BlogListing/transformations/bloglisting.entry-to-props.mapper';
import { productPagePropsMapping } from '../../pages/ProductPage/transformations/productpage.entry-to-props.mapper';
import { homepageHeroProps } from '../../pages/Home/transformations/homepage.entry-to-props.mapper';

export default [
  {
    contentTypeID: 'homepage',
    component: Loadable({
      loader: () => {
        return import('~/pages/Home/Home.page');
      },
      loading: Loading,
    }),
    linkDepth: 1,
    entryMapper: ({ entry }) => mapJson(entry, homepageHeroProps),
  },
  // Content Pages
  {
    contentTypeID: 'contentPage',
    component: Loadable({
      loader: () => {
        return import('~/pages/ContentPage/ContentPage.page');
      },
      loading: Loading,
    }),
    linkDepth: 2,
    entryMapper: node => {
      const mappedEntry = mapJson(
        {
          ...node.entry,
          ancestors: node.ancestors,
        },
        contentPagePropsMapping
      );
      return mappedEntry;
    },
  },
  {
    contentTypeID: 'landingPage',
    component: Loadable({
      loader: () => {
        return import('~/pages/LandingPage/LandingPage.page');
      },
      loading: Loading,
    }),
    linkDepth: 1,
    entryMapper: ({ entry }) => mapJson(entry, landingPagePropsMapping),
  },
  {
    contentTypeID: 'blogPost',
    component: Loadable({
      loader: () => {
        return import('~/pages/BlogPost/BlogPost.page');
      },
      loading: Loading,
    }),
    linkDepth: 1,
    entryMapper: ({ entry }) => mapJson(entry, blogPostPropsMapping),
  },
  {
    contentTypeID: 'plant',
    component: Loadable({
      loader: () => {
        return import('~/pages/ProductPage/ProductPage.page');
      },
      loading: Loading,
    }),
    linkDepth: 1,
    entryMapper: ({ entry }) => mapJson(entry, productPagePropsMapping),
  },
  {
    contentTypeID: 'pot',
    component: Loadable({
      loader: () => {
        return import('~/pages/ProductPage/ProductPage.page');
      },
      loading: Loading,
    }),
    linkDepth: 1,
    entryMapper: ({ entry }) => mapJson(entry, productPagePropsMapping),
  },
  // Listing Pages
  {
    contentTypeID: 'blogListing',
    component: Loadable({
      loader: () => {
        return import('~/pages/BlogListing/BlogListing.page');
      },
      loading: Loading,
    }),
    linkDepth: 1,
    entryMapper: ({ entry }) => mapJson(entry, blogListingPropsMapping),
  },
];
