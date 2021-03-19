export const contentBlockRowPropsMapping = {
  results: {
    $path: '.',
    $formatting: (block: any) => {
      return {
        type: 'content',
        title: block.title,
        imageUri:
          block.image &&
          block.image.asset &&
          block.image.asset.sys &&
          block.image.asset.sys.uri,
        imageAlt: block.image && block.image.altText,
        text: block.text,
      };
    },
  },
};
