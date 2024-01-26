import { ImagePropsMapping } from '~/components/image/Image.mapper';
import mapJson from '~/core/util/json-mapper';

export const productHeroSliderPropsMapping = {
  slides: {
    $path: 'photos',
    $formatting: (photo: any) => {
      return mapJson(photo, ImagePropsMapping);
    },
  },
};
