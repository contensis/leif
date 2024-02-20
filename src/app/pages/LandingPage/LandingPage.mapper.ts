import { mapComposer } from '~/core/util/json-mapper';
import { composerPropsMapping } from '~/components/composer/Composer.mapper';
import { BannerPropsMapping } from '~/components/ctaBanner/CTABanner.mapper';
import { LandingHeroPropsMapping } from '~/components/landingHero/LandingHero.mapper';
import { PageMetadataPropsMapping } from '~/components/metadata/Metadata.mapper';
import { CardRowSpotlightMapping } from '~/components/cardRowSpotlight/CardRowSpotlight.mapper';

export const LandingPagePropsMapping = {
  metaProps: PageMetadataPropsMapping,
  heroProps: LandingHeroPropsMapping,
  cardRowProps: CardRowSpotlightMapping,
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
