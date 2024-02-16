import mapJson from '~/core/util/json-mapper';
import { VariantProps } from './ProductHeroContent';

const MatchingPotsPropsMapping = {
  type: () => 'product',
  title: 'entryTitle',
  imageUri: {
    $path: 'primaryImage',
    $formatting: (img: any) =>
      img && img.asset && img.asset.sys && img.asset.sys.uri,
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  imageAlt: {
    $path: 'primaryImage',
    $formatting: (img: any) =>
      (img && img.altText) || img.caption || (img.asset && img.asset.title),
    $default: () => 'Leif logo',
  },
  price: {
    $path: ['plantVariant', 'potVariant'],
    $formatting: (v: any) => {
      return v.price;
    },
  },
  uri: {
    $path: 'sys',
    $formatting: (sys: any) => sys && sys.uri,
  },
};

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
      mapJson(matchingPots, MatchingPotsPropsMapping),
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
  title: 'productName',
  text: 'description',
  id: 'sys.id',
  imageUri: {
    $path: 'primaryImage',
    $formatting: (image: any) =>
      image && image.asset && image.asset.sys && image.asset.sys.uri,
  },
  variants: {
    $path: ['plantVariant', 'potVariant'],
    $formatting: (variant: any) => {
      return mapJson(variant, PlantPropsMapping);
    },
  },
};
