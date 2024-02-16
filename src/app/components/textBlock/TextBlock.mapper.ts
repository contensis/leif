export const TextBlockPropsMapping = {
  text: 'text',
  alignment: {
    $path: 'alignment',
    $formatting: (alignment: string) => alignment.toLowerCase(),
    $default: () => 'left',
  },
};
