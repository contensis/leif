import { mapComposer } from '~/core/util/json-mapper';
import { composerPropsMapping } from '~/components/composer/Composer.mapper';
import { BannerPropsMapping } from '~/components/ctaBanner/CTABanner.mapper';
import { LandingHeroPropsMapping } from '~/components/landingHero/LandingHero.mapper';
import { PageMetadataPropsMapping } from '~/components/metadata/Metadata.mapper';
import { CardRowSpotlightMapping } from '~/components/cardRowSpotlight/CardRowSpotlight.mapper';

export const LandingPagePropsMapping = {
  meta: PageMetadataPropsMapping,
  hero: LandingHeroPropsMapping,
  cards: CardRowSpotlightMapping,
  lead: {
    text: 'leadParagraph',
    type: () => 'center',
  },
  composer: {
    items: ({ bodyContent }: any) =>
      mapComposer(bodyContent, composerPropsMapping),
    isContentPage: () => true,
  },
  banner: BannerPropsMapping,
  form: {
    type: 'formPicker.form',
  },
};
