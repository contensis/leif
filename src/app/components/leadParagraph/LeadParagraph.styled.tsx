import styled, { css } from 'styled-components';

const TextBlockStyled = styled.div`
  ${({ theme }) => {
    return css`
      ${theme?.typeStyles?.h4};
      font-family: ${theme?.typeStyles?.fontFamily?.headings};
    `;
  }}
`;

export default TextBlockStyled;
