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
        border: 'transparent',
        hover: {
          background: colors.mirage,
        },
      },
      hollow: {
        color: colors.martinique,
        background: 'transparent',
        border: colors.martinique,
        hover: {
          background: 'rgba(195, 198, 222, .2)',
        },
      },
    },
    white: {
      hollow: {
        color: colors.white,
        background: 'transparent',
        border: colors.white,
        hover: {
          background: 'rgba(255, 255, 255, .2)',
        },
      },
    },
    disabled: {
      solid: {
        background: colors.seashell,
        color: colors.white,
        border: 'transparent',
      },
      hollow: {
        color: colors.seashell,
        border: colors.seashell,
        background: 'transparent',
      },
    },
  },
  ...layout,
  typeStyles,
};

export const darkTheme = {};
