import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { Props as ComposerProps } from '~/components/composer/ComposerWrapper';
import { Props as ContentHeroProps } from '~/components/contentHero/ContentHero';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as FormProps } from '~/components/form/Form';
import { Props as LeadParagraphProps } from '~/components/leadParagraph/LeadParagraph';
import { Props as MetadataProps } from '~/components/metadata/Metadata';
import { Props as PromotedContentProps } from '~/components/promotedContent/PromotedContent';

export interface MappedProps {
  contentHeroProps: ContentHeroProps;
  leadParagraphProps: LeadParagraphProps;
  contentComposerProps: ComposerProps;
  ctaBannerProps: CTABannerProps;
  promotedContentProps: PromotedContentProps;
  metadataProps: MetadataProps;
  formProps: FormProps;
}

export type Props = RouteComponentProps<MappedProps>;
