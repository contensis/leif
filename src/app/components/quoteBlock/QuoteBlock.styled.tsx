import styled, { css } from 'styled-components';

const QuoteBlockStyled = styled.blockquote`
  ${({ theme }) => {
    return css`
      ${theme.typeStyles.h4};
      color: ${theme.colors.secondary_light};
      font-family: ${theme.typeStyles.fontFamily.headings};
      position: relative;
      max-width: 482px;
      width: 100%;
      padding: 0 0 0 28px;
      margin: 0 auto;
      overflow-wrap: break-word;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-image: url('/static/img/svgs/shapes/quote-block-shape.svg');
        background-repeat: repeat-y;
      }
      .quote-block__details {
        margin-top: 16px;
      }
      .quote-block__rating {
        justify-content: flex-start;
      }
      .quote-block__person {
        margin-top: 16px;
      }
    `;
  }}
`;

export default QuoteBlockStyled;
