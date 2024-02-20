import styled, { css } from 'styled-components';

const QuoteBlockStyled = styled.div`
  ${({ theme }) => {
    return css`
      blockquote {
        ${theme.typeStyles.h4};
        color: var(--semantic-type-secondary);
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
      }
      footer {
        color: var(--semantic-charcoal-primary);
        margin-top: 24px;
        font-family: ${theme.typeStyles.fontFamily.headings};
        ${theme.typeStyles.h6};
      }
      cite {
        font-style: normal;
      }
    `;
  }}
`;

export default QuoteBlockStyled;
