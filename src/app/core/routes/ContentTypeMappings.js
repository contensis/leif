import mapJson from 'jsonpath-mapper';

import {
  HomePage,
  LandingPage,
  ContentPage,
  BlogListing,
  BlogPost,
  ProductPage,
} from '~/dynamic/pages';

// Mappings
import { contentPagePropsMapping } from '~/pages/ContentPage/transformations/contentpage.entry-to-props.mapper';
import { landingPagePropsMapping } from '~/pages/LandingPage/transformations/landingpage.entry-to-props.mapper';
import { blogPostPropsMapping } from '~/pages/BlogPost/transformations/blogpost.entry-to-props.mapper';
import { blogListingPropsMapping } from '~/pages/BlogListing/transformations/bloglisting.entry-to-props.mapper';
import { productPagePropsMapping } from '~/pages/ProductPage/transformations/productpage.entry-to-props.mapper';
import { homepageHeroProps } from '~/pages/Home/transformations/homepage.entry-to-props.mapper';

export default [
  {
    contentTypeID: 'homepage',
    component: HomePage,
    entryMapper: ({ entry }) => mapJson(entry, homepageHeroProps),
  },
  // Content Pages
  {
    contentTypeID: 'contentPage',
    component: ContentPage,
    linkDepth: 2,
    entryMapper: ({ ancestors, entry }) => {
      const mappedEntry = mapJson(
        {
          ...entry,
          ancestors,
        },
        contentPagePropsMapping
      );
      return mappedEntry;
    },
  },
  {
    contentTypeID: 'landingPage',
    component: LandingPage,
    entryMapper: ({ entry }) => mapJson(entry, landingPagePropsMapping),
  },
  {
    contentTypeID: 'blogPost',
    component: BlogPost,
    entryMapper: ({ entry }) => mapJson(entry, blogPostPropsMapping),
  },
  {
    contentTypeID: 'plant',
    component: ProductPage,
    entryMapper: ({ entry }) => mapJson(entry, productPagePropsMapping),
  },
  {
    contentTypeID: 'pot',
    component: ProductPage,
    entryMapper: ({ entry }) => mapJson(entry, productPagePropsMapping),
  },
  // Listing Pages
  {
    contentTypeID: 'blogListing',
    component: BlogListing,
    entryMapper: ({ entry }) => mapJson(entry, blogListingPropsMapping),
  },
];
