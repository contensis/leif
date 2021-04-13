export const metadataPropsMapper = {
  $path: ['socialMetadata'],
  $formatting: (data: any) => {
    const { metaTitle, metaDescription, image } = data || {};
    return {
      title: metaTitle,
      description: metaDescription,
      image:
        (image && image.asset && image.asset.sys && image.asset.sys.uri) ||
        '/image-library/default-images/leif-fallback.png',
    };
  },
};
