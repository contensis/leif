export const BannerPropsMapping = {
  title: 'callToAction.entryTitle',
  text: 'callToAction.entryDescription',
  imageUri: 'callToAction.image.asset.sys.uri',
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
      const ctId = link.sys?.contentTypeId || {};
      if (ctId === 'externalLink') return link?.url;
      else return link?.sys?.uri;
    },
  },
  btnType: 'primary',
};

export const BannerCanvasPropsMapping = {
  title: 'entryTitle',
  text: 'entryDescription',
  imageUri: 'image.asset.sys.uri',
  imageAlt: ['image.altText', 'image.caption', 'image.asset.title'],
  btnText: 'buttonText',
  btnLink: ['buttonLink.url', 'buttonLink.sys.uri'],
  btnType: 'primary',
};
