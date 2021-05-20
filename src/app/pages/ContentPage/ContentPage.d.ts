import { Props as ContentHeroProps } from '~/components/contentHero/ContentHero';
import { Props as LeadParagraphProps } from '~/components/leadParagraph/LeadParagraph';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as PromotedContentProps } from '~/components/promotedContent/PromotedContent';
import { Props as MetadataProps } from '~/components/metadata/Metadata';

export interface MappedProps {
  contentHeroProps: ContentHeroProps;
  leadParagraphProps: LeadParagraphProps;
  contentComposerProps: any;
  ctaBannerProps: CTABannerProps;
  promotedContentProps: PromotedContentProps;
  metadataProps: MetadataProps;
}

export interface Props {
  mappedEntry: MappedProps;
}
