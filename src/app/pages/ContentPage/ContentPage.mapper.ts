import mapJson, { mapComposer } from '~/core/util/json-mapper';
import { composerPropsMapping } from '~/components/composer/Composer.mapper';
import { BannerPropsMapping } from '~/components/ctaBanner/CTABanner.mapper';
import { promotedContentMapper } from '~/components/promotedContent/transformations/promotedContent.component-to-props.mapper';
import { ContentHeroPropsMapping } from '~/components/contentHero/ContentHero.mapper';
import { PageMetadataPropsMapping } from '~/components/metadata/Metadata.mapper';

export const ContentPageMappings = {
  metadataProps: PageMetadataPropsMapping,
  contentHeroProps: ContentHeroPropsMapping,
  leadParagraphProps: {
    text: 'leadParagraph',
  },
  composerProps: ({ bodyContent }: any) => {
    return {
      items: mapComposer(bodyContent, composerPropsMapping),
      isContentPage: true,
    };
  },
  ctaBannerProps: BannerPropsMapping,
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
  canvasProps: { data: 'canvas' },
};
