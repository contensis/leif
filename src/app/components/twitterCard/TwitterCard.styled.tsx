import styled, { css } from 'styled-components';

const TwitterCardStyled = styled.div`
  ${() => {
    return css`
      max-width: 399px;
      width: 100%;
      margin: 24px auto;
      position: relative;
      box-shadow: 0px 16px 24px rgba(56, 33, 146, 0.07);
      border: 1px solid #f1f1f1 !important;
      background-color: #fff;
      padding: 24px 16px;
      border-radius: 4px;
      .twitter-card__icon {
        position: absolute;
        top: 54px;
        right: 10px;
      }
    `;
  }};
`;

export default TwitterCardStyled;
