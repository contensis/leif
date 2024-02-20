export const PromotedContentMapper = {
  title: 'entryTitle',
  image: {
    src: {
      $path: ['primaryImage.asset.sys.uri', 'thumbnailImage.asset.sys.uri'],
      $default: () => '/image-library/default-images/leif-fallback.png',
    },
    alt: ['primaryImage.altText', 'thumbnailImage.altText'],
  },
  path: 'sys.uri',
};
