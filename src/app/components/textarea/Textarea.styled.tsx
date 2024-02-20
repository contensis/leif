import styled, { css } from 'styled-components';

const TextareaStyled = styled.div`
  ${({ theme }) => {
    return css`
      label {
        ${theme.typeStyles.cardCopy};
        margin-bottom: 16px;
      }
      textarea {
        width: 100%;
        min-height: 120px;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid var(--semantic-type-secondary);
        resize: none;
      }
    `;
  }};
`;

export default TextareaStyled;
