export const promotedProductPropsMapping = {
  title: 'productName',
  text: 'description',
  imageUri: {
    $path: 'primaryImage.asset.sys.uri',
    $formatting: (uri: string) =>
      uri.indexOf('?') > -1 ? `${uri}&format=webp` : `${uri}?format=webp`,
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  ctaLink: {
    $path: 'sys',
    $formatting: (sys: any) => sys.uri,
    $default: () => '/products',
  },
  ctaText: () => 'Find out more',
};
