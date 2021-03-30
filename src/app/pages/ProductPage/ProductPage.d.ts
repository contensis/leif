
import { Props as ProductHeroProps } from '~/components/productHero/ProductHero';
import { Props as TextBlockProps } from '~/components/textBlock/TextBlock';
import { Props as IconListProps } from '~/components/iconList/IconList';
import { Props as PromotedContentProps } from '~/components/promotedContent/PromotedContent';

export interface MappedProps {
  productHeroProps: ProductHeroProps;
  textBlockProps: TextBlockProps
  iconListProps: IconListProps;
  matchingProductsProps: PromotedContentProps;
}

export interface Props {
  mappedEntry: MappedProps;
}
