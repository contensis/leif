import styled, { css } from 'styled-components';

interface Props {
  alignment: string;
}

const TextBlockStyled = styled.div`
  ${({ alignment }: Props) => {
    return css`
      text-align: ${alignment};
      * > p:first-child {
        margin-top: 0;
      }
      .text-block__table {
        margin: 80px 0;
        overflow-x: auto;
      }
    `;
  }}
`;

export default TextBlockStyled;
