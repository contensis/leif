import styled, { css } from 'styled-components';

const TextBlockStyled = styled.div`
  ${({ isLeadParagraph }) => {
    return css`
      ${isLeadParagraph &&
        css`
          font-size: 24px;
          line-height: 32px;
          font-weight: 600;
        `}
    `;
  }}
`;

export default TextBlockStyled;
