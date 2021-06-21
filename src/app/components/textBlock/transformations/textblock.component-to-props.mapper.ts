export const textBlockPropsMapping = {
  text: 'text',
  alignment: {
    $path: 'alignment',
    $formatting: (alignment: string) => alignment.toLowerCase(),
    $default: () => 'left',
  },
};
