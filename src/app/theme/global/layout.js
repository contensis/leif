/**
 * Defines valid keys to use when referring to media query breakpoints
 *
 * @typedef {'base'|'mobile'|'laptop'|'desktop'|'largeDesktop'|'xlargeDesktop'} screenSizeKeys
 */

/**
 * @typedef breakpointDef_number
 * @property {number} [base]
 * @property {number} [mobile]
 * @property {number} [laptop]
 * @property {number} [desktop]
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
  ['laptop', 768],
  ['desktop', 1024],
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

export default {
  breakpointMap,
  sizes,
  sizesNoUnit,
  mq,
};
