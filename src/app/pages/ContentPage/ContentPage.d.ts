import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { Props as ContentHeroProps } from '~/components/contentHero/ContentHero';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as FormProps } from '~/components/form/Form';
import { Props as LeadParagraphProps } from '~/components/leadParagraph/LeadParagraph';
import { Props as MetadataProps } from '~/components/metadata/Metadata';
import { Props as PromotedContentProps } from '~/components/promotedContent/PromotedContent';
import { Block } from '@contensis/canvas-react';

export interface MappedProps {
  contentHeroProps: ContentHeroProps;
  leadParagraphProps: LeadParagraphProps;
  ctaBannerProps: CTABannerProps;
  promotedContentProps: PromotedContentProps;
  metadataProps: MetadataProps;
  formProps: FormProps;
  canvas?: Block[];
}

export type Props = RouteComponentProps<MappedProps>;
