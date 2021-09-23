import mapJson from '~/core/util/json-mapper';

// import { Props as TrendingButtonProps } from '~/components/trending/Trending';

export const promotedProductButtonPropsMapping = {
  label: 'buttonLabel',
  icon: () => 'arrow-right',
  type: () => 'secondary',
  isHollow: () => true,
  href: 'buttonUrl.sys.uri',
};

export const promotedProductPropsMapping = {
  title: 'product.productName',
  hasTrending: {
    $path: '.',
    $formatting: (product: any) => {
      const { buttons } = product || {};
      if (buttons && buttons.length >= 1) return true;
      else return false;
    },
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
    $path: 'buttons',
    $formatting: (btn: any) => mapJson(btn, promotedProductButtonPropsMapping),
  },
  align: () => '',
};
