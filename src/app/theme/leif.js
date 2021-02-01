import colors from './global/colors';
import layout from './global/layout';
import { typeStyles } from './global/typography';

export const defaultTheme = {
  colors: {
    ...colors,
    heading: colors.martinique,
    text: colors.charcoal,
    link: colors.sapphire,
  },
  button: {
    primary: {
      solid: {
        background: colors.riptide,
        color: colors.martinique,
        hover: {
          background: colors.keppel,
        },
      },
    },
    secondary: {
      solid: {
        color: colors.riptide,
        background: colors.martinique,
        hover: {
          background: colors.mirage,
        },
      },
      hollow: {
        color: colors.martinique,
        background: colors.martinique,
        hover: {
          background: 'rgba(195, 198, 222, .2)',
        },
      },
    },
    white: {
      hollow: {
        color: colors.white,
        border: colors.white,
        hover: {
          background: 'rgba(255, 255, 255, .2) ',
        },
      },
    },
  },
  ...layout,
  typeStyles,
};

export const darkTheme = {};
