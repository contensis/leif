export const ctaBannerPropsMapping = {
  title: 'callToAction.title',
  text: 'callToAction.message',
  imageUri: {
    $path: ['callToAction.image.asset.sys.uri'],
  },
  imageAlt: [
    'callToAction.image.altText',
    'callToAction.image.caption',
    'callToAction.image.asset.title',
  ],
  btnText: 'callToAction.buttonText',
  btnLink: [
    'callToAction.linkToInternalContent.sys.uri',
    'callToAction.linkToExternalURL',
  ],
  btnType: 'primary',
};
