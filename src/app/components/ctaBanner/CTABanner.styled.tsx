import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      max-width: 588px;
      width: 100%;
      padding: 0 16px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      .cta-banner__title {
        ${theme.typeStyles.h3};
        margin-top: 24px;
      }
      .cta-banner__text {
        margin: 16px 0 0 0;
      }
      .cta-banner__btn {
        margin-top: 40px;
      }
    `;
  }};
`;
