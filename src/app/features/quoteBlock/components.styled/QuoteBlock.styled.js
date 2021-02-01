import styled, { css } from 'styled-components';
import shape from '../assets/quote-shape.svg';

const QuoteBlockStyled = styled.blockquote`
  ${() => {
    return css`
      position: relative;
      max-width: 482px;
      width: 100%;
      padding: 0 0 0 28px;
      margin: 0 0 0 64px;
      font-weight: 600; // TODO: typography 'Quote' style?
      color: #6e729b; //TODO: move to theme file
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-image: url(${shape});
        background-repeat: repeat-y;
      }
    `;
  }}
`;

export default QuoteBlockStyled;
