import dateWithSuffix from '../../../utils/dateWithSuffix';
import { ctaBannerPropsMapping } from '../../../components/ctaBanner/transformations/ctaBanner.component-to-props.mapper';

export const blogListingPropsMapping = {
  title: 'entryTitle',
  featuredBlogProps: {
    title: 'featuredBlog.entryTitle',
    text: 'featuredBlog.kicker',
    isRenderedAsLink: () => true,
    date: ({ sys }: any) => dateWithSuffix(sys.version.published),
    ctaLink: {
      $path: 'featuredBlog',
      $formatting: (blog: any) => blog && blog.sys && blog.sys.uri,
    },
    ctaText: () => 'Read now',
    isListingPage: {
      $path: 'isListingPage',
      $default: () => () => 'Read now',
    },
    imageUri: {
      $path: 'featuredBlog.primaryImage',
      $formatting: (img: any) =>
        img && img.asset && img.asset.sys && img.asset.sys.uri,
    },
    imageAlt: [
      'featuredBlog.image.altText',
      'featuredBlog.image.caption',
      'featuredBlog.image.asset.title',
    ],
  },
  ctaBannerProps: {
    ...ctaBannerPropsMapping,
  },
};
