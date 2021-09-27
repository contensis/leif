import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { Props as ComposerProps } from '~/components/composer/ComposerWrapper';
import { Props as LandingHeroProps } from '~/components/landingHero/LandingHero';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as MetadataProps } from '~/components/metadata/Metadata';

export interface MappedProps {
  homeHeroProps: LandingHeroProps;
  contentComposerProps: ComposerProps;
  ctaBannerProps: CTABannerProps;
  metadataProps: MetadataProps;
}

export type Props = RouteComponentProps<MappedProps>;
