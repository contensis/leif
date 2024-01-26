export const CalloutPropsMapping = {
  type: {
    $path: 'type',
    $formatting: (type: string) => type?.toLowerCase(),
  },
  title: 'title',
  text: 'message',
};

export const CalloutCanvasMappings = {
  'data-component': () => 'callout-block',
  'data-type': 'block.properties.panelType',
};
