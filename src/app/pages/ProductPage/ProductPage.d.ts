
import { Props as ProductHeroProps } from '~/components/productHero/ProductHero';
import { Props as TextBlockProps } from '~/components/textBlock/TextBlock';
import { Props as IconListProps } from '~/components/iconList/IconList';
import { Props as RelatedProductsProps } from '~/components/relatedContent/RelatedContent';

export interface MappedProps {
  productHeroProps: ProductHeroProps;
  textBlockProps: TextBlockProps
  iconListProps: IconListProps;
  relatedProductsProps: RelatedProductsProps;
}

export interface Props {
  mappedEntry: MappedProps;
}
