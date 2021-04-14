import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import {
  HelveticaFontFace,
  fontFamily,
  fontWeight,
  fontBase,
  typeStyles,
} from './typography';

import colors from './colors';

const GlobalStyle = createGlobalStyle`
  ${HelveticaFontFace};
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
    outline-color: ${colors.link};
    outline-width: medium;
  }
  table {
    width: 730px !important;
    border-spacing: 0;
    border-collapse: collapse;
    border: none;
  }
  td, th {
    width: 220px !important;
    padding: 16px;
    text-align: left;
    border: 1px solid ${colors.neutral_white};
  }
  tbody {
    ${typeStyles.cardCopy};
    tr:nth-of-type(even) {
      background-color: rgba(119, 232, 198, 0.1);
    }
    tr:first-child {
      ${typeStyles.h5};
      color: ${colors.secondary};
      font-family: ${fontFamily.headings};
      background-color: ${colors.neutral_white};
    }
  }
  ul {
    list-style: none;
    margin: 24px 0;
    padding: 0 0 0 20px;
    li {
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 8px;
        left: -20px;
        background-image: url('/static/img/svgs/icons/bullet-point-icon.svg');
        background-repeat: no-repeat;
        width: 12px;
        height: 12px;
      }
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }
  }
  .overlay {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #2B2F51;
      opacity: 0.25;
      z-index: 9;
    }
  }
  .white-overlay {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      opacity: 1;
      z-index: 99;
    }
  }
`;

export default GlobalStyle;
