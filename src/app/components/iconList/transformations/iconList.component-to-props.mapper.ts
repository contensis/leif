export const iconListPropsMapping = {
  icons: {
    $path: '.',
    $formatting: (iconWithText: any) => {
      const icon =
        iconWithText &&
        iconWithText.iconPicker &&
        iconWithText.iconPicker.icon
          .toLowerCase()
          .replace(' ', '-')
          .replace('(', '')
          .replace(')', '');
      return {
        title: iconWithText.title,
        text: iconWithText.text,
        icon: icon,
      };
    },
  },
};
