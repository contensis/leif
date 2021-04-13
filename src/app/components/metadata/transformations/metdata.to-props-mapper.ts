export const pageMetadataPropsMapping = {
  $path: ['pageMetadata'],
  $formatting: (data: any) => {
    const { metaTitle, metaDescription, metaImage } = data || {};
    return {
      title: metaTitle,
      description: metaDescription,
      image:
        (metaImage &&
          metaImage.asset &&
          metaImage.asset.sys &&
          metaImage.asset.sys.uri) ||
        '/image-library/default-images/leif-fallback.png',
    };
  },
};

export const externalPromotionPropsMapping = {
  title: 'externalPromotion.externalTitle',
  description: 'externalPromotion.externalDescription',
  image: {
    $path: ['externalCardImage', 'thumbnailImage'],
    $formatting: (image: any) =>
      image && image.asset && image.asset.sys && image.asset.sys.uri,
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
};
