import mapJson, { mapComposer } from '../../../core/util/json-mapper';

import { ctaBannerPropsMapping } from '../../../components/ctaBanner/transformations/ctaBanner.component-to-props.mapper';
import { composerPropsMapping } from '../../../components/composer/transformations/composer-to-props.mapper';
import { imagePropsMapping } from '../../../components/image/transformations/image.component-to-props.mapper';
import mapEntriesToResults from '../../..//components/card/transformations/entry-to-card-props.mapper';

export const blogPostPropsMapping = {
  blogHeroProps: {
    title: 'entryTitle',
    imageProps: ({ primaryImage }: any) =>
      mapJson(primaryImage, imagePropsMapping),
  },
  blogInformationProps: {
    photo: {
      $path: 'author.photo.asset.sys.uri',
    },
    name: 'author.name',
    readTime: 'readTime',
    data: 'sys.version.published',
  },
  leadParagraphProps: {
    text: 'leadParagraph',
  },
  ctaBannerProps: {
    ...ctaBannerPropsMapping,
  },
  contentComposerProps: ({ postBody }: any) =>
    mapComposer(postBody, composerPropsMapping),
  relatedContentProps: {
    title: 'Related blogs',
    results: ({ relatedBlogs }: any) => mapEntriesToResults(relatedBlogs),
    linkUri: '/blogs',
    linkLabel: 'View all blogs',
  },
};
