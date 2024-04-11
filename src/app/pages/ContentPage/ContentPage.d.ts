import { RouteComponentProps } from '@zengenti/contensis-react-base';
import { Props as ContentHeroProps } from '~/components/contentHero/ContentHero';
import { Props as CTABannerProps } from '~/components/ctaBanner/CTABanner';
import { Props as FormProps } from '~/components/form/Form';
import { Props as MetadataProps } from '~/components/metadata/Metadata';
import { Props as PromotedContentProps } from '~/components/promotedContent/PromotedContent';
import { Props as CanvasProps } from '~/components/canvas/Canvas';

export interface MappedProps {
  meta: MetadataProps;
  hero: ContentHeroProps;
  canvas: CanvasProps;
  banner: CTABannerProps;
  promoted: PromotedContentProps;
  form: FormProps;
}

export type Props = RouteComponentProps<MappedProps>;
