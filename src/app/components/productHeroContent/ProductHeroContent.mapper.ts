import mapJson from '~/core/util/json-mapper';
import { VariantProps } from './ProductHeroContent';
import { ProductCardMapping } from '../search/transformations/entry-to-card-props.mapper';

const PlantPropsMapping = {
  sku: 'sku',
  price: 'price',
  height: 'heightCM',
  diameter: 'potDiameterCM',
  internalDiameterCM: 'internalDiameterCM',
  externalDiameterCM: 'externalDiameterCM',
  externalHeightCM: 'externalHeightCM',
  matchingPots: {
    $path: 'matchingPots',
    $formatting: (matchingPots: any) =>
      mapJson(matchingPots, ProductCardMapping),
  },
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

export const ProductHeroContentPropsMapping = {
  id: 'sys.id',
  title: 'productName',
  text: 'description',
  image: {
    src: 'primaryImage.asset.sys.uri',
    alt: 'primaryImage.altText',
  },
  variants: {
    $path: ['plantVariant', 'potVariant'],
    $formatting: (variant: any) => {
      return mapJson(variant, PlantPropsMapping);
    },
  },
};
