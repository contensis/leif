import styled, { css } from 'styled-components';
import colors from '~/theme/global/colors';

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
        color: ${theme.colors.secondary};
        text-align: center;
        margin: 0 0 40px 0;
      }
      label {
        display: block;
        color: ${colors.secondary_dark};
        ${theme.typeStyles.cardCopy};
        margin: 0 0 8px;
      }
      input,
      textarea {
        ::-webkit-input-placeholder {
          color: ${colors.secondary_light};
        }
        ::-moz-placeholder {
          color: ${colors.secondary_light};
        }
        :-ms-input-placeholder {
          color: ${colors.secondary_light};
        }
        :-moz-placeholder {
          color: ${colors.secondary_light};
        }
      }
      input {
        color: ${colors.secondary_light};
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
