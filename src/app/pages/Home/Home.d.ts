import { Props as LandingHeroProps } from '~/components/landingHero/LandingHero';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';

export interface MappedProps {
  homeHeroProps: LandingHeroProps;
  contentComposerProps: any;
  ctaBannerProps: CTABannerProps,
}

export interface Props {
  mappedEntry: MappedProps;
}
