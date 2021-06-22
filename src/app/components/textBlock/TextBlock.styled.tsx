import styled, { css } from 'styled-components';

interface Props {
  alignment: string;
}

const TextBlockStyled = styled.div`
  ${({ alignment }: Props) => {
    return css`
      text-align: ${alignment === 'centred' ? 'center' : alignment};
      * > p:first-child {
        margin-top: 0;
      }
      .text-block__table {
        margin: 80px 0;
        overflow-x: auto;
      }
      ul {
        display: inline-flex;
        flex-direction: column;
        align-items: ${alignment === 'left'
          ? 'flex-start'
          : alignment === 'right'
          ? 'flex-end'
          : 'center'};
        li {
          display: inline-block;
        }
      }
    `;
  }}
`;

export default TextBlockStyled;
