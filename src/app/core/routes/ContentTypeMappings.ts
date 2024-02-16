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
import { ContentPageMappings } from '~/pages/ContentPage/ContentPage.mapper';
import { LandingPagePropsMapping } from '~/pages/LandingPage/LandingPage.mapper';
import { BlogPostPropsMapping } from '~/pages/BlogPost/BlogPost.mapper';
import { BlogListingPropsMapping } from '~/pages/BlogListing/BlogListing.mapper';
import { ProductListingPropsMapping } from '~/pages/ProductListing/ProductListing.mapper';
import { ProductPagePropsMapping } from '~/pages/ProductPage/ProductPage.mapper';
import { HomepagePropsMapping } from '~/pages/Home/Home.mapper';
import { ContentTypes } from '~/core/schema';

const ContentTypeMappings: ContentTypeMapping[] = [
  {
    contentTypeID: 'homepage',
    component: HomePage,
    entryMapper: ({ entry }) => mapJson(entry, HomepagePropsMapping),
  },
  // Content Pages
  {
    contentTypeID: ContentTypes.contentPage,
    component: ContentPage,
    linkDepth: 2,
    entryMapper: entryMapper(ContentPageMappings),
  },
  {
    contentTypeID: ContentTypes.landingPage,
    component: LandingPage,
    entryMapper: entryMapper(LandingPagePropsMapping),
  },
  {
    contentTypeID: ContentTypes.blog,
    component: BlogPost,
    entryMapper: entryMapper(BlogPostPropsMapping),
  },
  {
    contentTypeID: ContentTypes.plant,
    component: ProductPage,
    entryMapper: entryMapper(ProductPagePropsMapping),
  },
  {
    contentTypeID: ContentTypes.pot,
    component: ProductPage,
    entryMapper: entryMapper(ProductPagePropsMapping),
  },
  // Listing Pages
  {
    contentTypeID: ContentTypes.blogListing,
    component: BlogListing,
    entryMapper: entryMapper(BlogListingPropsMapping),
  },
  {
    contentTypeID: ContentTypes.skeletonPage,
    component: ProductListing,
    entryMapper: ({ entry, slug }) => {
      if (slug === 'products') {
        return mapJson(entry, ProductListingPropsMapping);
      }
    },
  },
];

export default ContentTypeMappings;
