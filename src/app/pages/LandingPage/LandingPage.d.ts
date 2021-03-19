import { Props as GenericHeroProps } from '~/components/genericHero/GenericHero';
import { Props as ContentHeroProps } from '~/components/contentHero/ContentHero';
import { Props as LandingHeroProps } from '~/components/landingHero/LandingHero';
import { Props as LeadParagraphProps } from '~/components/leadParagraph/LeadParagraph';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';

export interface MappedProps {
  landingPageHeroProps: GenericHeroProps | ContentHeroProps | LandingHeroProps;
  leadParagraphProps: LeadParagraphProps;
  contentComposerProps: any;
  ctaBannerProps: CTABannerProps,
}

export interface Props {
  mappedEntry: MappedProps;
}
