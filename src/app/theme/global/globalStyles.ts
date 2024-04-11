import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { fontFamily, fontWeight, fontBase, typeStyles } from './typography';

const GlobalStyle = createGlobalStyle`
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

  :root {
    --semantic-brand-primary: #77E8C6;
    --semantic-brand-secondary: #016F4E;
    --semantic-brand-tertiary: #39B38E;
    --semantic-background-primary: #fff;
    --semantic-background-secondary: #000;
    --semantic-type-primary: #2b2f51;
    --semantic-type-secondary: #6e729b;
    --semantic-type-tertiary: #1e213e;
    --semantic-link-primary: #303B9F;
    --semantic-charcoal-primary: #333;
    --semantic-charcoal-secondary: #A9A9A9;
    --semantic-charcoal-tertiary: #F1F1F1;
    --semantic-error-primary: #FF1F55;
    --semantic-warning-primary: #FFC805;
  }



  body {
    min-height: 100vh;
    width: 100%;
    font-family: ${fontFamily.default};
    font-size: ${fontBase.fontSize};
    font-weight: ${fontWeight.regular};
    line-height: ${fontBase.lineHeight};
    color: var(--semantic-charcoal-primary);
    background-color: var(--semantic-background-primary);
  }
  h1,h2,h3,h4,h5,h6 {
    margin:0;
    font-family: ${fontFamily.headings};
    font-weight: ${fontWeight.bold};
    color: var(--semantic-type-primary);
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
    outline-color: var(--semantic-link-primary);
    outline-width: medium;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
    border: none;
    width: 100%;
    text-align: left;
  }

  td,
  th {
    min-width: 220px;
    padding: 16px;
    text-align: left;
    border: 1px solid var(--semantic-background-primary);
    > * {
      ${typeStyles.cardCopy};
      margin: 0;
    }
  }

  thead th {
    ${typeStyles.h5};
    color: var(--semantic-type-primary);
    font-family: ${fontFamily.headings};
    background-color: var(--semantic-background-primary);
  }

  tbody tr:nth-child(2n + 1) {
    background-color: rgba(119, 232, 198, 0.1);
  }

  ul, ol {
    margin: 24px 0;
    padding: 0 0 0 20px;
    li:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  ul li {
    list-style: none;
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
  }
  [data-overlay='true'] {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--semantic-type-primary);
      opacity: 0.25;
      z-index: 9;
    }
  }
`;

export default GlobalStyle;
