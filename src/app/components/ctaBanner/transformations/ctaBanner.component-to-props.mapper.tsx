export const ctaBannerPropsMapping = {
  title: 'callToAction.entryTitle',
  text: 'callToAction.entryDescription',
  imageUri: {
    $path: 'callToAction.image',
    $formatting: (image: any) =>
      image && image.asset && image.asset.sys && image.asset.sys.uri,
  },
  imageAlt: [
    'callToAction.image.altText',
    'callToAction.image.caption',
    'callToAction.image.asset.title',
  ],
  btnText: 'callToAction.buttonText',
  btnLink: {
    $path: 'callToAction.buttonLink',
    $formatting: (link: any) => {
      if (!link) return null;
      const { contentTypeId } = link.sys || {};
      if (contentTypeId === 'externalLink') {
        return link && link.url;
      } else {
        return link && link.sys && link.sys.uri;
      }
    },
  },
  btnType: 'primary',
};
