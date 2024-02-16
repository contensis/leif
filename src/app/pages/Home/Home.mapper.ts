import { LandingHeroPropsMapping } from '~/components/landingHero/LandingHero.mapper';
import { BannerPropsMapping } from '~/components/ctaBanner/CTABanner.mapper';
import { PageMetadataPropsMapping } from '~/components/metadata/Metadata.mapper';
import contentComposerMapper from '~/components/composer/Composer.mapper';

export const HomepagePropsMapping = {
  metadataProps: PageMetadataPropsMapping,
  homeHeroProps: LandingHeroPropsMapping,
  contentComposerProps: contentComposerMapper({ isHomepage: true }),
  ctaBannerProps: BannerPropsMapping,
};
