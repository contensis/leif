import { iconPropsMapping } from '~/components/iconList/transformations/iconList.component-to-props.mapper';
import { productHeroContentPropsMapping } from '~/components/productHeroContent/transformations/productherocontent.component-to-props.mapper';
import { productHeroSliderPropsMapping } from '~/components/productHeroSlider/transformations/productheroslider.component-to-props.mapper';
import { externalPromotionPropsMapping } from '~/components/metadata/transformations/metdata.to-props-mapper';

import mapJson from '~/core/util/json-mapper';

export const productPagePropsMapping = {
  productHeroContentProps: { ...productHeroContentPropsMapping },
  productHeroSliderProps: { ...productHeroSliderPropsMapping },
  metadataProps: { ...externalPromotionPropsMapping },
  textBlockProps: {
    text: 'careAdvice',
  },
  iconListProps: {
    icons: {
      $path: 'growingConditions',
      $formatting: (condition: any) => mapJson(condition, iconPropsMapping),
    },
  },
  matchingProductsProps: {
    title: () => 'Matching pots',
    linkUri: () => '/products',
    linkLabel: () => 'View all products',
  },
};
