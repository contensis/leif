import { mapComposer } from '~/core/util/json-mapper';
import { composerPropsMapping } from '~/components/composer/Composer.mapper';
import { BannerPropsMapping } from '~/components/ctaBanner/CTABanner.mapper';
import { LandingHeroPropsMapping } from '~/components/landingHero/LandingHero.mapper';
// import { CardRowPropsMapping } from '~/components/cardRow/CardRow.mapper';
import { PageMetadataPropsMapping } from '~/components/metadata/Metadata.mapper';

export const LandingPagePropsMapping = {
  metadataProps: PageMetadataPropsMapping,
  landingPageHeroProps: LandingHeroPropsMapping,
  // relatedContentProps: CardRowPropsMapping,
  leadParagraphProps: {
    text: 'leadParagraph',
    type: () => 'center',
  },
  contentComposerProps: {
    items: ({ bodyContent }: any) =>
      mapComposer(bodyContent, composerPropsMapping),
    isContentPage: () => true,
  },
  ctaBannerProps: BannerPropsMapping,
  formProps: {
    type: 'formPicker.form',
  },
};
