import styled, { css } from 'styled-components';

const TextBlockStyled = styled.div`
  ${() => {
  return css`
    .text-block__table {
      overflow-x: auto;
    }
  `;
  }}
`;

export default TextBlockStyled;
