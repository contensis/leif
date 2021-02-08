import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import {
  HalveticaFontFace,
  fontFamily,
  fontWeight,
  fontBase,
  typeStyles,
} from './typography';

import colors from './colors';

const GlobalStyle = createGlobalStyle`
  ${HalveticaFontFace};
  /* Normalize / Reset css */
  ${normalize}
	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}
  html, body {
    height: 100%;
  }
  body {
    min-height: 100vh;
    width: 100%;
    font-family: ${fontFamily.default};
    font-size: ${fontBase.fontSize};
    font-weight: ${fontWeight.regular};
    line-height: ${fontBase.lineHeight};
    color: ${colors.neutral_charcoal};
  }
  h1,h2,h3,h4,h5,h6 {
    margin:0;
    font-family: ${fontFamily.headings};
    font-weight: ${fontWeight.bold};
    color: ${colors.secondary};
  }
  h1 {
    ${typeStyles.h1}
  }
  h2 {
    ${typeStyles.h2}
  }
  h3 {
    ${typeStyles.h3}
  }
  h4 {
    ${typeStyles.h4}
  }
  h5 {
    ${typeStyles.h5}
  }
  h6 {
    ${typeStyles.h6}
  }
  img {
    max-width:100%;  
  }
  button {
    cursor: pointer;
  }
  a:focus, button:focus{
    outline-offset: 4px;
    outline: auto;
    outline-color: ${colors?.link};
    outline-width: medium;
  }
`;

export default GlobalStyle;
