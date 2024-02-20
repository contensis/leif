import { IconPropsMapping } from '~/components/iconList/IconList.mapper';
import { ProductHeroContentPropsMapping } from '~/components/productHeroContent/ProductHeroContent.mapper';
import { ProductHeroSliderPropsMapping } from '~/components/productHeroSlider/ProductHeroSlider.mapper';
import { ExternalPromotionPropsMapping } from '~/components/metadata/Metadata.mapper';

import mapJson from '~/core/util/json-mapper';

export const ProductPagePropsMapping = {
  heroProps: ProductHeroContentPropsMapping,
  sliderProps: ProductHeroSliderPropsMapping,
  metadataProps: ExternalPromotionPropsMapping,
  textProps: { text: 'careAdvice' },
  iconListProps: {
    icons: {
      $path: 'growingConditions',
      $formatting: (condition: any) => mapJson(condition, IconPropsMapping),
    },
  },
  promotionProps: {
    title: () => 'Matching pots',
    linkUri: () => '/products',
    linkLabel: () => 'View all products',
  },
};
