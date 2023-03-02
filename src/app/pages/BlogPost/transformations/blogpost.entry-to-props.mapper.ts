import { mapComposer } from '~/core/util/json-mapper';

import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';
import { composerPropsMapping } from '~/components/composer/transformations/composer-to-props.mapper';
import { externalPromotionPropsMapping } from '~/components/metadata/transformations/metdata.to-props-mapper';
import { ctaBannerPropsMapping } from '~/components/ctaBanner/transformations/ctaBanner.component-to-props.mapper';

import dateWithSuffix from '~/utils/dateWithSuffix';
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
    imageAlt: [
      'primaryImage.altText',
      'primaryImage.caption',
      'primaryImage.asset.title',
    ],
    backLinkUri: () => '/blog',
    backLinkLabel: () => 'Blogs',
  },
  blogInformationProps: {
    author: {
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
  },
  leadParagraphProps: {
    text: 'leadParagraph',
  },
  contentComposerProps: {
    items: ({ postBody }: any) => mapComposer(postBody, composerPropsMapping),
  },
  ctaBannerProps: {
    ...ctaBannerPropsMapping,
  },
  relatedContentProps: {
    title: () => 'Read now',
    results: ({ relatedBlogs }: any) => mapEntriesToResults(relatedBlogs),
    linkUri: () => '/blog',
    linkLabel: () => 'View all blogs',
  },
};
