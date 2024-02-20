import styled, { css } from 'styled-components';

const FormStyled = styled.div`
  ${({ theme }) => {
    return css`
      max-width: 620px;
      width: 100%;
      padding: 0 24px;
      margin: 0 auto;
      .form__title {
        display: block;
        ${theme.typeStyles.h3};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: var(--semantic-type-primary);
        text-align: center;
        margin: 0 0 40px 0;
      }
      label {
        display: block;
        color: var(--semantic-type-tertiary);
        ${theme.typeStyles.cardCopy};
        margin: 0 0 8px;
      }
      input,
      textarea {
        ::-webkit-input-placeholder {
          color: var(--semantic-type-secondary);
        }
        ::-moz-placeholder {
          color: var(--semantic-type-secondary);
        }
        :-ms-input-placeholder {
          color: var(--semantic-type-secondary);
        }
        :-moz-placeholder {
          color: var(--semantic-type-secondary);
        }
      }
      input {
        color: var(--semantic-type-secondary);
        margin: 0 0 24px;
      }
      button {
        padding: 8px;
        margin: 16px 0 0 0;
        width: 180px;
      }
    `;
  }};
`;

export default FormStyled;
