import { Props as LandingHeroProps } from '~/components/landingHero/LandingHero';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as MetadataProps } from '~/components/metadata/Metadata';

export interface MappedProps {
  homeHeroProps: LandingHeroProps;
  contentComposerProps: any;
  ctaBannerProps: CTABannerProps,
  metadataProps: MetadataProps,
}

export interface Props {
  mappedEntry: MappedProps;
}
