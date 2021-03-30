import { imagePropsMapping } from '~/components/image/transformations/image.component-to-props.mapper';
import mapJson from '~/core/util/json-mapper';
import { VariantProps } from '../ProductHero';

const plantPropsMapping = {
  sku: 'sku',
  price: 'price',
  height: 'heightCM',
  diameter: 'potDiameterCM',
  internalDiameterCM: 'internalDiameterCM',
  externalDiameterCM: 'externalDiameterCM',
  externalHeightCM: 'externalHeightCM',
  variantTitle: {
    $path: '.',
    $formatting: ({
      potDiameterCM,
      heightCM,
      externalDiameterCM,
      externalHeightCM,
    }: VariantProps) => {
      if (potDiameterCM && heightCM) {
        return `${potDiameterCM} x ${heightCM}cm`;
      } else if (externalDiameterCM && externalHeightCM) {
        return `${externalDiameterCM} x ${externalHeightCM}cm`;
      }
    },
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
    $path: ['plantVariant', 'potVariant'],
    $formatting: (variant: any) => {
      return mapJson(variant, plantPropsMapping);
    },
  },
};
