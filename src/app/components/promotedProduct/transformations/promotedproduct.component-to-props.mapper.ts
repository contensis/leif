export const promotedProductPropsMapping = {
  title: 'productName',
  text: 'description',
  imageUri: {
    $path: 'primaryImage.asset.sys.uri',
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  ctaLink: {
    $path: 'sys',
    $formatting: (sys: any) => sys.uri,
    $default: () => '/products',
  },
  ctaText: () => 'Find out more',
};
