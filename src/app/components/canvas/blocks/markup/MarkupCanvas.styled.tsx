import styled, { css } from 'styled-components';

interface Props {
  alignment: string;
  theme: any;
}

const MarkupBlockStyled = styled.div`
  ${({ theme, alignment }: Props) => {
    return css`
      .lead-paragraph {
        font-style: ${theme.typeStyles.h4};
        font-family: ${theme.typeStyles.fontFamily.headings};
        font-size: 1.5rem;
        line-height: 2rem;
      }

      text-align: ${alignment === 'centred' ? 'center' : alignment};
      * > p:first-child {
        margin-top: 0;
      }
      .text-block__table {
        margin: 80px 0;
        overflow-x: auto;a
      }
      ul {
        display: inline-flex;
        flex-direction: column;
        align-items: ${
          alignment === 'left'
            ? 'flex-start'
            : alignment === 'right'
            ? 'flex-end'
            : 'center'
        };
        li {
          display: inline-block;
        }
      }

    `;
  }}
`;

export default MarkupBlockStyled;
