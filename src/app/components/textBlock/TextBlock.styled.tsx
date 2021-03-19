import styled, { css } from 'styled-components';

const TextBlockStyled = styled.div`
  ${() => {
    return css`
      .text-block__table {
        margin: 80px 0;
        overflow-x: auto;
      }
    `;
  }}
`;

export default TextBlockStyled;
