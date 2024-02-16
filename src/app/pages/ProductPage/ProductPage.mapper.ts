import { IconPropsMapping } from '~/components/iconList/IconList.mapper';
import { ProductHeroContentPropsMapping } from '~/components/productHeroContent/ProductHeroContent.mapper';
import { ProductHeroSliderPropsMapping } from '~/components/productHeroSlider/ProductHeroSlider.mapper';
import { ExternalPromotionPropsMapping } from '~/components/metadata/Metadata.mapper';

import mapJson from '~/core/util/json-mapper';

export const ProductPagePropsMapping = {
  productHeroContentProps: ProductHeroContentPropsMapping,
  productHeroSliderProps: ProductHeroSliderPropsMapping,
  metadataProps: ExternalPromotionPropsMapping,
  textBlockProps: {
    text: 'careAdvice',
  },
  iconListProps: {
    icons: {
      $path: 'growingConditions',
      $formatting: (condition: any) => mapJson(condition, IconPropsMapping),
    },
  },
  matchingProductsProps: {
    title: () => 'Matching pots',
    linkUri: () => '/products',
    linkLabel: () => 'View all products',
  },
};
