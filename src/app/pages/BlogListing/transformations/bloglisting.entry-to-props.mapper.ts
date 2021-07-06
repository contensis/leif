// Utils
import dateWithSuffix from '~/utils/dateWithSuffix';
import { mapComposer } from '~/core/util/json-mapper';
import { _calReadTime } from '~/utils/calculateReadTime';

// Mappers
import { ctaBannerPropsMapping } from '~/components/ctaBanner/transformations/ctaBanner.component-to-props.mapper';
import { pageMetadataPropsMapping } from '~/components/metadata/transformations/metdata.to-props-mapper';
import { composerPropsMapping } from '~/components/composer/transformations/composer-to-props.mapper';

export const blogListingPropsMapping = {
  metadataProps: { ...pageMetadataPropsMapping },
  title: 'entryTitle',
  featuredBlogProps: {
    headingLevel: () => 2,
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
    readTime: {
      $path: 'featuredBlog',
      $formatting: ({ postBody }: any) => {
        const composer = mapComposer(postBody, composerPropsMapping);
        return _calReadTime(composer);
      },
    },
    imageUri: {
      $path: 'featuredBlog.primaryImage',
      $formatting: (img: any) =>
        img && img.asset && img.asset.sys && img.asset.sys.uri,
    },
    imageAlt: [
      'featuredBlog.primaryImage.altText',
      'featuredBlog.primaryImage.caption',
      'featuredBlog.primaryImage.asset.title',
    ],
  },
  ctaBannerProps: {
    ...ctaBannerPropsMapping,
  },
};
