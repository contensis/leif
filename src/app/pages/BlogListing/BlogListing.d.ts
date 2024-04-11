import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { Props as GenericHeroProps } from '~/components/genericHero/GenericHero';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as MetadataProps } from '~/components/metadata/Metadata';

export interface MappedProps {
  meta: MetadataProps;
  title: string;
  featured: GenericHeroProps;
  banner: CTABannerProps;
}

export type Props = RouteComponentProps<MappedProps>;
