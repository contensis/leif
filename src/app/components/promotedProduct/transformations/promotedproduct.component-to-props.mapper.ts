import mapJson from '~/core/util/json-mapper';

import { Props as TrendingButtonProps } from '~/components/trending/Trending';

export const promotedProductPropsMapping = {
  title: 'productName',
  text: 'description',
  imageUri: {
    $path: 'primaryImage.asset.sys.uri',
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  imageAlt: [
    'primaryImage.altText',
    'primaryImage.caption',
    'primaryImage.asset.title',
  ],
  ctaLink: {
    $path: 'sys',
    $formatting: (sys: any) => sys.uri,
    $default: () => '/products',
  },
  ctaText: () => 'Find out more',
};

export const promotedProductButtonPropsMapping = {
  label: 'buttonLabel',
  icon: () => 'arrow-right',
  type: () => 'secondary',
  isHollow: () => true,
  href: 'linkedEntry.sys.uri',
};

export const promotedProductNewPropsMapping = {
  title: 'product.productName',
  hasTrending: {
    $path: '.',
    $formatting: (product: any) =>
      product && product.button && product.button.length >= 1 ? true : false,
  },
  text: 'product.description',
  imageUri: {
    $path: 'product.primaryImage.asset.sys.uri',
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  imageAlt: [
    'product.primaryImage.altText',
    'product.primaryImage.caption',
    'product.primaryImage.asset.title',
  ],
  ctaLink: {
    $path: 'product.sys',
    $formatting: (sys: any) => sys.uri,
    $default: () => '/products',
  },
  ctaText: () => 'Find out more',
  buttons: {
    $path: 'button',
    $formatting: (btn: TrendingButtonProps[]) =>
      mapJson(btn, promotedProductButtonPropsMapping),
  },
};
