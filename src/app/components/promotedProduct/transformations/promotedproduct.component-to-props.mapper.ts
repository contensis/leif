export const promotedProductPropsMapping = {
  title: 'productName',
  text: 'description',
  imageUri: {
    $path: 'thumbnailImage',
    $formatting: (img: any) =>
      img && img.asset && img.asset.sys && img.asset.sys.uri,
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  ctaLink: {
    $path: 'sys',
    $formatting: (sys: any) => sys.uri,
    $default: () => '/products',
  },
  ctaText: () => 'Find out more',
};
