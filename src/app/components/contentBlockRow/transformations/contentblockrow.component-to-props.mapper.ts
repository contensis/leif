import mapJson from 'jsonpath-mapper';

export const contentBlockRowPropsMapping = {
  results: {
    $path: '.',
    $formatting: (cb: any) =>
      mapJson(cb, {
        type: () => 'content',
        title: 'title',
        imageUri: 'image.asset.sys.uri',
        imageAlt: 'image.altText',
        text: 'text',
      }),
  },
};
