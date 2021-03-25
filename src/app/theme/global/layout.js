const baseSize = 8;

/**
 * Defines valid keys to use when referring to media query breakpoints
 *
 * @typedef {'base'|'mobile'|'tablet'|'laptop'|'desktop'| 'mediumDesktop'| 'largeDesktop'|'xlargeDesktop'} screenSizeKeys
 */

/**
 * @typedef breakpointDef_number
 * @property {number} [base]
 * @property {number} [mobile]
 * @property {number} [tablet]
 * @property {number} [laptop]
 * @property {number} [desktop]
 * @property {string} [mediumDesktop]
 * @property {number} [largeDesktop]
 * @property {number} [xlargeDesktop]
 */

/**
 * @typedef breakpointDef_string
 * @property {string} [base]
 * @property {string} [mobile]
 * @property {string} [tablet]
 * @property {string} [laptop]
 * @property {string} [desktop]
 * @property {string} [mediumDesktop]
 * @property {string} [largeDesktop]
 * @property {string} [xlargeDesktop]
 */

/**
 * Set media query breakpoint values.
 * We initialise these as a map so we can retain the ordering for certain use cases
 * This map gets reassigned to {@link breakpoint} object for easy consumption eg. breakpoint.medium instead of breakpoint.get('medium')
 *
 * @type {Map<screenSizeKeys, number>}
 */
export const breakpointMap = new Map([
  ['mobile', 320],
  ['tablet', 481],
  ['laptop', 768],
  ['desktop', 1024],
  ['mediumDesktop', 1200],
  ['largeDesktop', 1440],
  ['xlargeDesktop', 1700],
]);

/**
 * This is generated from the {@link breakpointMap}.
 * Stores media query breakpoint values with px units
 *
 * @type {breakpointDef_string}
 */

export const sizes = {};

/**
 * This is generated from the {@link breakpointMap}.
 * Stores media query breakpoint values without px units
 *
 * @type {breakpointDef_number}
 */
export const sizesNoUnit = {};

/**
 * This is generated from the {@link breakpointMap}.
 * Stores media query css for each breakpoint
 *
 * @type {breakpointDef_string}
 *
 * @example
 * ```@media ${theme.mq.mobile} {
 *  Styles here
 * }```
 */
export const mq = {};

breakpointMap.forEach((value, key) => {
  sizes[key] = `${value}px`;
  sizesNoUnit[key] = value;
  mq[key] = `only screen and (min-width: ${value}px)`;
});

export const region = {
  full: {
    width: '100%',
  },
  default: {
    width: '1200px',
  },
  large: {
    width: '1060px',
  },
  medium: {
    width: '840px',
  },
  msmall: {
    width: '730px',
  },
  small: {
    width: '620px',
  },
  margin: {
    default: baseSize * 5 + 'px', // 40px
    small: baseSize * 4 + 'px', // 32px
    medium: baseSize * 7 + 'px', // 56px
    large: baseSize * 12 + 'px', // 96px
    xlarge: baseSize * 16 + 'px', // 128px
    none: '0',
    auto: 'auto',
  },
  padding: {
    default: baseSize * 3 + 'px', // 24px
    small: baseSize * 2 + 'px', // 16px
    medium: baseSize * 3 + 'px', // 24px
    large: baseSize * 4 + 'px', // 32px
    xlarge: baseSize * 5 + 'px', // 40px
    xxlarge: baseSize * 10 + 'px', // 80px
    none: '0',
  },
};

export const spacing = {
  tiny: baseSize / 2 + 'px',
  x_small: baseSize + 'px',
  small: baseSize * 2 + 'px',
  medium: baseSize * 3 + 'px',
  large: baseSize * 4 + 'px',
  x_large: baseSize * 5 + 'px',
  xx_large: baseSize * 16 + 'px',
};

export default {
  spacing,
  breakpointMap,
  sizes,
  region,
  sizesNoUnit,
  mq,
};
