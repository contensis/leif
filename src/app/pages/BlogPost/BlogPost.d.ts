import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { Props as MetadataProps } from '~/components/metadata/Metadata';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as GenericHeroProps } from '~/components/genericHero/GenericHero';
import { Props as RelatedContentProps } from '~/components/relatedContent/RelatedContent';
import { Props as BlogInformationProps } from '~/components/blogInformation/BlogInformation';
import { Props as BlogCanvasProps } from '~/components/canvas/Canvas';

export interface MappedProps {
  meta: MetadataProps;
  hero: GenericHeroProps;
  banner: CTABannerProps;
  canvas: BlogCanvasProps;
  content: RelatedContentProps;
  information: BlogInformationProps;
}

export type Props = RouteComponentProps<MappedProps>;
