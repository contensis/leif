import { imagePropsMapping } from '~/components/image/transformations/image.component-to-props.mapper';
import mapJson from '~/core/util/json-mapper';

export const productPagePropsMapping = {
  productHeroProps: {
    title: 'productName',
    text: 'description',
    slides: {
      $path: 'photos',
      $formatting: (photo: any) => {
        return mapJson(photo, imagePropsMapping);
      },
    },
  },
};
