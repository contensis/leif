import { Props as GenericHeroProps } from '~/components/genericHero/GenericHero';
import { Props as BlogInformationProps } from '~/components/blogInformation/BlogInformation';
import { Props as LeadParagraphProps } from '~/components/leadParagraph/LeadParagraph';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as RelatedContentProps } from '~/components/relatedContent/RelatedContent';
import { Props as MetadataProps } from '~/components/metadata/Metadata';
export interface MappedProps {
  blogInformationProps: BlogInformationProps;
  blogHeroProps: GenericHeroProps;
  ctaBannerProps: CTABannerProps;
  leadParagraphProps: LeadParagraphProps;
  contentComposerProps: any;
  relatedContentProps: RelatedContentProps;
  metadataProps: MetadataProps;
}

export interface Props {
  mappedEntry: MappedProps;
}
