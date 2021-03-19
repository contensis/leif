export const calloutPropsMapping = {
  type: {
    $path: 'type',
    $formatting: (type: string) => type && type.toLowerCase(),
  },
  title: 'title',
  text: 'message',
};
