import { entryMapper, mapJson } from '@zengenti/contensis-react-base/util';
import { ContentTypeMapping } from '@zengenti/contensis-react-base';

import {
  HomePage,
  LandingPage,
  ContentPage,
  BlogListing,
  BlogPost,
  ProductPage,
  ProductListing,
} from '~/dynamic/pages';

// Mappings
import { contentPagePropsMapping } from '~/pages/ContentPage/transformations/contentpage.entry-to-props.mapper';
import { landingPagePropsMapping } from '~/pages/LandingPage/transformations/landingpage.entry-to-props.mapper';
import { blogPostPropsMapping } from '~/pages/BlogPost/transformations/blogpost.entry-to-props.mapper';
import { blogListingPropsMapping } from '~/pages/BlogListing/transformations/bloglisting.entry-to-props.mapper';
import { productListingPropsMapping } from '~/pages/ProductListing/transformations/productlisting.entry-to-props.mapper';
import { productPagePropsMapping } from '~/pages/ProductPage/transformations/productpage.entry-to-props.mapper';
import { homepageHeroProps } from '~/pages/Home/transformations/homepage.entry-to-props.mapper';
import { ContentTypes } from '../schema';

const {
  blogListing,
  blog,
  contentPage,
  landingPage,
  plant,
  pot,
  productListing,
} = ContentTypes;

const contentTypeMappings: ContentTypeMapping[] = [
  {
    contentTypeID: 'homepage',
    component: HomePage,
    entryMapper: ({ entry }) => mapJson(entry, homepageHeroProps),
  },
  // Content Pages
  {
    contentTypeID: contentPage,
    component: ContentPage,
    linkDepth: 2,
    entryMapper: entryMapper(contentPagePropsMapping),
  },
  {
    contentTypeID: landingPage,
    component: LandingPage,
    entryMapper: entryMapper(landingPagePropsMapping),
  },
  {
    contentTypeID: blog,
    component: BlogPost,
    entryMapper: entryMapper(blogPostPropsMapping),
  },
  {
    contentTypeID: plant,
    component: ProductPage,
    entryMapper: entryMapper(productPagePropsMapping),
  },
  {
    contentTypeID: pot,
    component: ProductPage,
    entryMapper: entryMapper(productPagePropsMapping),
  },
  // Listing Pages
  {
    contentTypeID: blogListing,
    component: BlogListing,
    entryMapper: entryMapper(blogListingPropsMapping),
  },
  {
    contentTypeID: productListing,
    component: ProductListing,
    entryMapper: entryMapper(productListingPropsMapping),
  },
];

export default contentTypeMappings;
