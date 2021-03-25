import mapJson from '~/core/util/json-mapper';

export const iconPropsMapping = {
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

export const iconListPropsMapping = {
  icons: {
    $path: '.',
    $formatting: (iconWithText: any) => mapJson(iconWithText, iconPropsMapping),
  },
};
