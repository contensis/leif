import { RouteComponentProps } from '@zengenti/contensis-react-base/models';
import { Props as ProductHeroContentProps } from '~/components/productHeroContent/ProductHeroContent';
import { Props as ProductHeroSliderProps } from '~/components/productHeroSlider/ProductHeroSlider';
import { Props as TextBlockProps } from '~/components/textBlock/TextBlock';
import { Props as IconListProps } from '~/components/iconList/IconList';
import { Props as PromotedContentProps } from '~/components/promotedContent/PromotedContent';
import { Props as MetadataProps } from '~/components/metadata/Metadata';

export interface MappedProps {
  heroProps: ProductHeroContentProps;
  sliderProps: ProductHeroSliderProps;
  textProps: TextBlockProps;
  iconListProps: IconListProps;
  promotionProps: PromotedContentProps;
  metadataProps: MetadataProps;
}

export type Props = RouteComponentProps<MappedProps>;
