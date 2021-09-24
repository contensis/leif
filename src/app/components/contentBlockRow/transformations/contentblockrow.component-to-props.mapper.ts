import mapJson from 'jsonpath-mapper';

export const contentBlockRowPropsMapping = {
  results: {
    $path: '.',
    $formatting: (block: any) => {
      return Object.values(block)
        .map(
          (cb: any) =>
            cb &&
            mapJson(cb, {
              type: () => 'content',
              title: 'title',
              imageUri: 'image.asset.sys.uri',
              imageAlt: 'image.altText',
              text: 'text',
            })
        )
        .filter(cb => cb);
    },
    // $formatting: (block: any) => {
    //   return {
    //     type: 'content',
    //     title: block.title,
    //     imageUri:
    //       block.image &&
    //       block.image.asset &&
    //       block.image.asset.sys &&
    //       block.image.asset.sys.uri,
    //     imageAlt: block.image && block.image.altText,
    //     text: block.text,
    //   };
    // },
  },
};
