import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { Props as BlogInformationProps } from '~/components/blogInformation/BlogInformation';
import { Props as ComposerProps } from '~/components/composer/ComposerWrapper';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as GenericHeroProps } from '~/components/genericHero/GenericHero';
import { Props as LeadParagraphProps } from '~/components/leadParagraph/LeadParagraph';
import { Props as MetadataProps } from '~/components/metadata/Metadata';
import { Props as RelatedContentProps } from '~/components/relatedContent/RelatedContent';

export interface MappedProps {
  blogInformationProps: BlogInformationProps;
  blogHeroProps: GenericHeroProps;
  ctaBannerProps: CTABannerProps;
  leadParagraphProps: LeadParagraphProps;
  contentComposerProps: ComposerProps;
  relatedContentProps: RelatedContentProps;
  metadataProps: MetadataProps;
}

export type Props = RouteComponentProps<MappedProps>;
