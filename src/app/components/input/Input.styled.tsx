import styled, { css } from 'styled-components';

const InputStyled = styled.div`
  ${({ theme }) => {
    return css`
      label {
        ${theme.typeStyles.cardCopy};
        margin-bottom: 16px;
      }
      input {
        width: 100%;
        height: 56px;
        padding: 8px 16px;
        border-radius: 8px;
        border: 1px solid ${theme.colors.secondary_light};
      }
    `;
  }};
`;

export default InputStyled;
