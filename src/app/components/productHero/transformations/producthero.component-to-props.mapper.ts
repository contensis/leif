import { imagePropsMapping } from '~/components/image/transformations/image.component-to-props.mapper';
import mapJson from '~/core/util/json-mapper';
import { VariantProps } from '../ProductHero';

const variantPropsMapping = {
  sku: 'sku',
  price: 'price',
  height: 'heightCM',
  diameter: 'potDiameterCM',
  variantTitle: {
    $path: '.',
    $formatting: ({ potDiameterCM, heightCM }: VariantProps) =>
      `${potDiameterCM} x ${heightCM}cm`,
  },
};

export const productHeroPropsMapping = {
  title: 'productName',
  text: 'description',
  id: 'sys.id',
  slides: {
    $path: 'photos',
    $formatting: (photo: any) => {
      return mapJson(photo, imagePropsMapping);
    },
  },
  variants: {
    $path: 'plantVariant',
    $formatting: (variant: any) => {
      return mapJson(variant, variantPropsMapping);
    },
  },
};
