import mapJson from 'jsonpath-mapper';
import { CardTypes } from '~/core/schema';

export const ContentBlockRowPropsMapping = {
  results: {
    $path: '.',
    $formatting: (cb: any) =>
      mapJson(cb, {
        type: () => CardTypes.Content,
        title: 'title',
        text: 'text',
        image: {
          src: 'image.asset.sys.uri',
          alt: 'image.altText',
        },
      }),
  },
};
