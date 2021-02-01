export const sizes = {
  mobile: '320px',
  tablet: '481px',
  laptop: '769px',
  desktop: '1025px',
  largeDesktop: '1441px',
};

export const mq = {
  mobile: `only screen and (min-width: ${sizes.mobile})`,
  tablet: `only screen and (min-width: ${sizes.tablet})`,
  laptop: `only screen and (min-width: ${sizes.laptop})`,
  desktop: `only screen and (min-width: ${sizes.desktop})`,
  largeDesktop: `only screen and (min-width: ${sizes.largeDesktop})`,
};

// To use media queries follow this pattern
// @media ${theme.mq.mobile} {
//   Styles here
// }

export const grid = {
  gap: '1.2rem',
  padding: {
    default: '1.6rem',
    large: '5.2rem',
  },
  margin: {
    default: '1.6rem',
    large: '5.2rem',
  },
  width: {
    default: '170rem',
    fullWidth: '100%',
    article: '80rem',
    small: '58.8rem',
  },
};

export const spacing = {
  small: '4rem',
  medium: '8rem',
  large: '12rem',
};
