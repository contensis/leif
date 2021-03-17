import { Props as GenericHeroProps } from '~/components/genericHero/GenericHero';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';

export interface MappedProps {
  title: string;
  featuredBlogProps: GenericHeroProps,
  ctaBannerProps: CTABannerProps,
}

export interface Props {
  mappedEntry: MappedProps;
}
