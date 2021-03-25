import { iconPropsMapping } from '~/components/iconList/transformations/iconList.component-to-props.mapper';
import { imagePropsMapping } from '~/components/image/transformations/image.component-to-props.mapper';
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';
import mapJson from '~/core/util/json-mapper';

export const productPagePropsMapping = {
  productHeroProps: {
    title: 'productName',
    text: 'description',
    id: 'sys.id',
    slides: {
      $path: 'photos',
      $formatting: (photo: any) => {
        return mapJson(photo, imagePropsMapping);
      },
    },
  },
  textBlockProps: {
    text: 'careAdvice',
  },
  iconListProps: {
    icons: {
      $path: 'growingConditions',
      $formatting: (condition: any) => mapJson(condition, iconPropsMapping),
    },
  },
  relatedProductsProps: {
    title: () => 'Matching pots',
    results: ({ matchingPots }: any) => {
      if (!matchingPots || matchingPots.length < 1) return null;
      return mapEntriesToResults(matchingPots);
    },
    linkUri: () => '/product',
    linkLabel: () => 'View all products',
  },
};
