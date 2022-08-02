import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { Props as EventInformationProps } from '~/components/eventInformation/EventInformation';
import { Props as GenericHeroProps } from '~/components/genericHero/GenericHero';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as LeadParagraphProps } from '~/components/leadParagraph/LeadParagraph';
import { Props as ComposerProps } from '~/components/composer/ComposerWrapper';
import { Props as RelatedContentProps } from '~/components/relatedContent/RelatedContent';
import { Props as MetadataProps } from '~/components/metadata/Metadata';

export interface MappedProps {
  eventInformationProps: EventInformationProps;
  eventHeroProps: GenericHeroProps;
  ctaBannerProps: CTABannerProps;
  leadParagraphProps: LeadParagraphProps;
  contentComposerProps: ComposerProps;
  relatedContentProps: RelatedContentProps;
  metadataProps: MetadataProps;
}

export type Props = RouteComponentProps<MappedProps>;
