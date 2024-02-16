import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { Props as ContentHeroProps } from '~/components/contentHero/ContentHero';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as FormProps } from '~/components/form/Form';
import { Props as LeadParagraphProps } from '~/components/leadParagraph/LeadParagraph';
import { Props as MetadataProps } from '~/components/metadata/Metadata';
import { Props as PromotedContentProps } from '~/components/promotedContent/PromotedContent';
import { Props as CanvasProps } from '~/components/canvas/Canvas';
import { Props as ComposerProps } from '~/components/composer/ComposerWrapper';

export interface MappedProps {
  contentHeroProps: ContentHeroProps;
  canvasProps: CanvasProps;
  leadParagraphProps: LeadParagraphProps;
  composerProps: ComposerProps;
  ctaBannerProps: CTABannerProps;
  promotedContentProps: PromotedContentProps;
  metadataProps: MetadataProps;
  formProps: FormProps;
}

export type Props = RouteComponentProps<MappedProps>;
