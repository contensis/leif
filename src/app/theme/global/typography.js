import { css } from 'styled-components';
import { sizesNoUnit } from './layout';

export const HelveticaFontFace = css`
  @font-face {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    src: local('Helvetica'), local('Helvetica'),
      url('/static/fonts/Helvetica.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/static/fonts/Helvetica.woff') format('woff');
    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    font-display: swap;
  }
`;

/**
 * Define base font parameters
 *
 * @type {{fontSize: string, lineHeight: string, [key:string]: any}}
 */
export const fontBase = {
  fontSize: '1rem',
  lineHeight: '2rem',
};

/**
 * Font family definitions
 *
 * @type {{default: string, headings: string, [key:string]: string}}
 */
export const fontFamily = {
  default: `'Helvetica', Arial, sans-serif`,
  headings: `'Source Serif Pro', serif`,
};

/**
 * Font weight definitions.
 * To maintain consistent values
 *
 * @type {object}
 */
export const fontWeight = {
  regular: 400,
  bold: 600,
};

/**
 * Config to declare core typography styles.
 * This is used to generate css that can be consumed in components
 * to maintain uniform font styles across all device sizes.
 * Use keys defined in {@link breakpoint} to invoke media query based styles
 *
 * @type {{[key:string]: {[key in import('./layout').screenSizeKeys]?: object}}}
 */
const typography = {
  p: {
    base: {
      'font-size': fontBase.fontSize,
      'line-height': fontBase.lineHeight,
    },
  },
  h1: {
    base: {
      'font-size': '2.5rem',
      'line-height': '3rem',
      'font-weight': '600',
    },
    tablet: {
      'font-size': '4rem',
      'line-height': '5rem',
    },
  },
  h2: {
    base: {
      'font-size': '2rem',
      'line-height': '2.5rem',
      'font-weight': '600',
    },
    tablet: {
      'font-size': '3rem',
      'line-height': '3.5rem',
    },
  },
  h3: {
    base: {
      'font-size': '1.625rem',
      'line-height': '2.5rem',
      'font-weight': '600',
    },
    tablet: {
      'font-size': '2rem',
      'line-height': '3rem',
    },
  },
  h4: {
    base: {
      'font-size': '1.375rem',
      'line-height': '2rem',
      'font-weight': '600',
    },
    tablet: {
      'font-size': '1.5rem',
      'line-height': '2rem',
    },
  },
  h5: {
    base: {
      'font-size': '1.125rem',
      'line-height': '1.5rem',
      'font-weight': '600',
    },
    tablet: {
      'font-size': '1.25rem',
      'line-height': '2rem',
    },
  },
  h6: {
    base: {
      'font-size': '1rem',
      'line-height': '1.5rem',
      'font-weight': '600',
    },
    tablet: {
      'font-size': '1.125rem',
    },
  },
  cardCopy: {
    base: {
      'font-size': '1rem',
      'line-height': '1.5rem',
    },
  },
  smallCopy: {
    base: {
      'font-size': '0.875rem',
      'line-height': '1.5rem',
    },
  },
};

/**
 * This is generated from {@link typography}
 * Creates an object of css styles assigned to keys using {@link generateTypeStyles}
 */
export const typeStyles = { fontFamily };

/**
 * Creates css string from {@link typography} object.
 * Uses {@link breakpoint} variable to generate media query css output.
 *
 * @param {object} typography - the css object definition to parse
 */
const generateTypeStyles = typography => {
  Object.keys(typography).map(key => {
    const styles = Object.keys(typography[key])
      .map(screenSize => {
        const screenSizeobj = typography[key][screenSize];

        const props = Object.keys(screenSizeobj)
          .map(key => `${key}:${screenSizeobj[key]}`)
          .join(';\n');

        if (screenSize === 'base') {
          return props;
        } else
          return `@media only screen and (min-width: ${sizesNoUnit[screenSize]}px) { ${props} }`;
      })
      .join(';\n');

    typeStyles[key] = styles;
  });
};

generateTypeStyles(typography);
