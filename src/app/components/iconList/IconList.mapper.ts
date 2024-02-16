import mapJson from '~/core/util/json-mapper';

export const IconPropsMapping = {
  title: 'title',
  text: ['entryDescription', 'text'],
  icon: {
    $path: 'iconPicker.icon',
    $formatting: (icon: any) => {
      const iconString = icon
        .toLowerCase()
        .replace(' ', '-')
        .replace('(', '')
        .replace(')', '');
      return iconString;
    },
  },
};

export const IconListPropsMapping = {
  icons: {
    $path: '.',
    $formatting: (iconWithText: any) => mapJson(iconWithText, IconPropsMapping),
  },
};
