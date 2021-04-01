import { iconPropsMapping } from '~/components/iconList/transformations/iconList.component-to-props.mapper';
import { productHeroPropsMapping } from '~/components/productHero/transformations/producthero.component-to-props.mapper';
import mapJson from '~/core/util/json-mapper';

export const productPagePropsMapping = {
  productHeroProps: { ...productHeroPropsMapping },
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
    linkUri: () => '/products-shop',
    linkLabel: () => 'View all products',
  },
};
