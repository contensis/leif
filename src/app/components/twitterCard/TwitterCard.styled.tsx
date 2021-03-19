import styled, { css } from 'styled-components';

const TwitterCardStyled = styled.div`
  ${({ theme }) => {
    return css`
      max-width: 399px;
      width: 100%;
      margin: 0 auto;
      .twitter-card__icon {
        margin: 0 auto 8px;
      }
      .twitter-card__error {
        text-align: center;
      }
      .twitter-card__error-message {
        ${theme.typeStyles.h5};
      }
    `;
  }};
`;

export default TwitterCardStyled;
