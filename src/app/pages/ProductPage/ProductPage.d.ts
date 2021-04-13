
import { Props as ProductHeroProps } from '~/components/productHero/ProductHero';
import { Props as TextBlockProps } from '~/components/textBlock/TextBlock';
import { Props as IconListProps } from '~/components/iconList/IconList';
import { Props as PromotedContentProps } from '~/components/promotedContent/PromotedContent';
import { Props as MetadataProps } from '~/components/metadata/Metadata';

export interface MappedProps {
  productHeroProps: ProductHeroProps;
  textBlockProps: TextBlockProps
  iconListProps: IconListProps;
  matchingProductsProps: PromotedContentProps;
  metadataProps: MetadataProps,
}

export interface Props {
  mappedEntry: MappedProps;
}
