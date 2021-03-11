// import mapJson from '../../../core/util/json-mapper';

// import { imagePropsMapping } from '../../../components/image/transformations/image.component-to-props.mapper';

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
