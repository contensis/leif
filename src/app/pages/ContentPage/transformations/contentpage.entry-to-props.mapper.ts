import mapJson, { mapComposer } from '~/core/util/json-mapper';
import { composerPropsMapping } from '~/components/composer/transformations/composer-to-props.mapper';
import { ctaBannerPropsMapping } from '~/components/ctaBanner/transformations/ctaBanner.component-to-props.mapper';
import { promotedContentMapper } from '~/components/promotedContent/transformations/promotedContent.component-to-props.mapper';
import { contentHeroPropsMapper } from '~/components/contentHero/transformations/contenthero.component-to-props.mapper';
import { pageMetadataPropsMapping } from '~/components/metadata/transformations/metdata.to-props-mapper';

export const contentPagePropsMapping = {
  metadataProps: { ...pageMetadataPropsMapping },
  contentHeroProps: {
    ...contentHeroPropsMapper,
    ancestors: {
      $path: 'ancestors',
      $formatting: (item: any) => {
        const { displayName, path } = item || {};
        return {
          displayName,
          path,
        };
      },
    },
  },
  leadParagraphProps: {
    text: 'leadParagraph',
  },
  contentComposerProps: ({ bodyContent }: any) => {
    return {
      items: mapComposer(bodyContent, composerPropsMapping),
      isContentPage: true,
    };
  },
  ctaBannerProps: {
    ...ctaBannerPropsMapping,
  },
  promotedContentProps: {
    title: 'promotedContentTitle',
    results: ({ promotedContent }: any) => {
      return promotedContent.map((link: any) => {
        return mapJson(link, promotedContentMapper);
      });
    },
  },
  formProps: {
    type: 'formPicker.form',
  },
};
