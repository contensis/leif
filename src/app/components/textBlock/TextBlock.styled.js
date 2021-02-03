import styled, { css } from 'styled-components';

const TextBlockStyled = styled.div`
  ${({ theme, isLeadParagraph }) => {
    return css`
      &:not(:first-child) {
        margin-top: 24px;
      }
      ${isLeadParagraph &&
        css`
          ${theme?.typeStyles?.h4};
          font-family: ${theme?.typeStyles?.fontFamily?.headings};
        `}
    `;
  }}
`;

export default TextBlockStyled;
