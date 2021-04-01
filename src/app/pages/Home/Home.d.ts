import { Props as LandingHeroProps } from '~/components/landingHero/LandingHero';

export interface MappedProps {
  homeHeroProps: LandingHeroProps;
  contentComposerProps: any;
}

export interface Props {
  mappedEntry: MappedProps;
}
