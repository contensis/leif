import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { Props as MetadataProps } from '~/components/metadata/Metadata';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as ComposerProps } from '~/components/composer/ComposerWrapper';
import { Props as GenericHeroProps } from '~/components/genericHero/GenericHero';
import { Props as LeadParagraphProps } from '~/components/leadParagraph/LeadParagraph';
import { Props as RelatedContentProps } from '~/components/relatedContent/RelatedContent';
import { Props as BlogInformationProps } from '~/components/blogInformation/BlogInformation';

export interface MappedProps {
  metadataProps: MetadataProps;
  ctaBannerProps: CTABannerProps;
  contentComposerProps: ComposerProps;
  blogHeroProps: GenericHeroProps;
  leadParagraphProps: LeadParagraphProps;
  relatedContentProps: RelatedContentProps;
  blogInformationProps: BlogInformationProps;
}

export type Props = RouteComponentProps<MappedProps>;
