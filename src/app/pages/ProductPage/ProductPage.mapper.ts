import { IconPropsMapping } from '~/components/iconList/IconList.mapper';
import { ProductHeroContentPropsMapping } from '~/components/productHeroContent/ProductHeroContent.mapper';
import { ProductHeroSliderPropsMapping } from '~/components/productHeroSlider/ProductHeroSlider.mapper';
import { ExternalPromotionPropsMapping } from '~/components/metadata/Metadata.mapper';

import mapJson from '~/core/util/json-mapper';

export const ProductPagePropsMapping = {
  hero: ProductHeroContentPropsMapping,
  slider: ProductHeroSliderPropsMapping,
  meta: ExternalPromotionPropsMapping,
  text: { text: 'careAdvice' },
  icons: {
    icons: {
      $path: 'growingConditions',
      $formatting: (condition: any) => mapJson(condition, IconPropsMapping),
    },
  },
  promotion: {
    title: () => 'Matching pots',
    linkUri: () => '/products',
    linkLabel: () => 'View all products',
  },
};
