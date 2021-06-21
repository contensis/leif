import { mapComposer } from '~/core/util/json-mapper';

import { ctaBannerPropsMapping } from '~/components/ctaBanner/transformations/ctaBanner.component-to-props.mapper';
import { composerPropsMapping } from '~/components/composer/transformations/composer-to-props.mapper';
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';
import dateWithSuffix from '~/utils/dateWithSuffix';
import { externalPromotionPropsMapping } from '~/components/metadata/transformations/metdata.to-props-mapper';
import { _calReadTime } from '~/utils/calculateReadTime';

export const blogPostPropsMapping = {
  metadataProps: { ...externalPromotionPropsMapping },
  blogHeroProps: {
    title: 'entryTitle',
    imageUri: {
      $path: 'primaryImage',
      $formatting: (img: any) =>
        img && img.asset && img.asset.sys && img.asset.sys.uri,
    },
    imageAlt: ['image.altText', 'image.caption', 'image.asset.title'],
    backLinkUri: () => '/blog',
    backLinkLabel: () => 'Blogs',
  },
  blogInformationProps: {
    photo: {
      $path: 'author.photo',
      $formatting: (img: any) =>
        img && img.asset && img.asset.sys && img.asset.sys.uri,
      $default: () => '/image-library/default-images/leif-fallback.png',
    },
    name: 'author.name',
    date: ({ sys }: any) =>
      dateWithSuffix(sys && sys.version && sys.version.published),
    readTime: ({ postBody }: any) => {
      const composer = mapComposer(postBody, composerPropsMapping);
      return _calReadTime(composer);
    },
  },
  leadParagraphProps: {
    text: 'leadParagraph',
  },
  ctaBannerProps: {
    ...ctaBannerPropsMapping,
  },
  contentComposerProps: {
    items: ({ postBody }: any) => mapComposer(postBody, composerPropsMapping),
  },
  relatedContentProps: {
    title: () => 'Read now',
    results: ({ relatedBlogs }: any) => mapEntriesToResults(relatedBlogs),
    linkUri: () => '/blog',
    linkLabel: () => 'View all blogs',
  },
};
