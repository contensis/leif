import { mapComposer } from '~/core/util/json-mapper';
import { composerPropsMapping } from '~/components/composer/transformations/composer-to-props.mapper';
import { ctaBannerPropsMapping } from '~/components/ctaBanner/transformations/ctaBanner.component-to-props.mapper';
import { landingHeroPropsMapping } from '~/components/landingHero/transformations/landinghero-component-to-props.mapper';
import { CardRowPropsMapper } from '~/components/cardRow/CardRow.mapper';
import { pageMetadataPropsMapping } from '~/components/metadata/transformations/metdata.to-props-mapper';

export const landingPagePropsMapping = {
  metadataProps: { ...pageMetadataPropsMapping },
  landingPageHeroProps: { ...landingHeroPropsMapping },
  relatedContentProps: { ...CardRowPropsMapper },
  leadParagraphProps: {
    text: 'leadParagraph',
    type: () => 'center',
  },
  contentComposerProps: {
    items: ({ bodyContent }: any) =>
      mapComposer(bodyContent, composerPropsMapping),
    isContentPage: () => true,
  },
  ctaBannerProps: {
    ...ctaBannerPropsMapping,
  },
  formProps: {
    type: 'formPicker.form',
  },
};
