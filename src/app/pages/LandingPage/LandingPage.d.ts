import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { Props as GenericHeroProps } from '~/components/genericHero/GenericHero';
import { Props as CardRowProps } from '~/components/cardRow/CardRow';
import { Props as ComposerProps } from '~/components/composer/ComposerWrapper';
import { Props as LandingHeroProps } from '~/components/landingHero/LandingHero';
import { Props as LeadParagraphProps } from '~/components/leadParagraph/LeadParagraph';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as MetadataProps } from '~/components/metadata/Metadata';
import { Props as FormProps } from '~/components/form/Form';

export interface MappedProps {
  landingPageHeroProps: LandingHeroProps | GenericHeroProps;
  leadParagraphProps: LeadParagraphProps;
  contentComposerProps: ComposerProps;
  relatedContentProps: CardRowProps;
  ctaBannerProps: CTABannerProps;
  metadataProps: MetadataProps;
  formProps: FormProps;
}

export type Props = RouteComponentProps<MappedProps>;
