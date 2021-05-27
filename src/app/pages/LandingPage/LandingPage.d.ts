import { Props as GenericHeroProps } from '~/components/genericHero/GenericHero';
import { Props as CardRowProps } from '~/components/cardRow/CardRow';
import { Props as LandingHeroProps } from '~/components/landingHero/LandingHero';
import { Props as LeadParagraphProps } from '~/components/leadParagraph/LeadParagraph';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as MetadataProps } from '~/components/metadata/Metadata';
import { Props as FormProps } from '~/components/form/Form';

export interface MappedProps {
  landingPageHeroProps: LandingHeroProps | GenericHeroProps;
  leadParagraphProps: LeadParagraphProps;
  contentComposerProps: any;
  relatedContentProps: CardRowProps;
  ctaBannerProps: CTABannerProps;
  metadataProps: MetadataProps;
  formProps: FormProps;
}

export interface Props {
  mappedEntry: MappedProps;
}
