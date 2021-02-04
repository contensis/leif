import styled, { css } from 'styled-components';
// import shape from './assets/quote-shape.svg';
/* background-image: url(${shape}); */

const QuoteBlockStyled = styled.blockquote`
  ${({ theme }) => {
    return css`
      ${theme?.typeStyles?.h4};
      color: ${theme?.colors?.kimberly};
      font-family: ${theme?.typeStyles?.fontFamily?.headings};
      position: relative;
      max-width: 482px;
      width: 100%;
      padding: 0 0 0 28px;
      margin: 0;
      overflow-wrap: break-word;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-repeat: repeat-y;
      }
    `;
  }}
`;

export default QuoteBlockStyled;
