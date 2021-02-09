import colors from './global/colors';
import layout from './global/layout';
import { typeStyles } from './global/typography';

export const defaultTheme = {
  colors: {
    ...colors,
    heading: colors.secondary,
    text: colors.neutral_charcoal,
    link: colors.link,
  },
  button: {
    primary: {
      solid: {
        background: colors.primary,
        color: colors.secondary,
        hover: {
          background: colors.primary_light,
        },
      },
    },
    secondary: {
      solid: {
        color: colors.primary,
        background: colors.secondary,
        border: 'transparent',
        hover: {
          background: colors.secondary_dark,
        },
      },
      hollow: {
        color: colors.secondary,
        background: 'transparent',
        border: colors.secondary,
        hover: {
          background: 'rgba(195, 198, 222, .2)',
        },
      },
    },
    white: {
      hollow: {
        color: colors.neutral_white,
        background: 'transparent',
        border: colors.neutral_white,
        hover: {
          background: 'rgba(255, 255, 255, .2)',
        },
      },
    },
    disabled: {
      solid: {
        background: colors.neutral_lightgrey,
        color: colors.neutral_white,
        border: 'transparent',
      },
      hollow: {
        color: colors.neutral_lightgrey,
        border: colors.neutral_lightgrey,
        background: 'transparent',
      },
    },
  },
  ...layout,
  typeStyles,
};

export const darkTheme = {};
