import styled, { css } from 'styled-components';

const BasketSummaryStyled = styled.div`
  ${({ theme }) => {
    return css`
      .basket-summary__title {
        ${theme.typeStyles.h4};
        text-align: center;
        margin: 40px 0 16px;
      }
      .basket-summary__info {
        > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
      }
      .basket-summary__total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-transform: uppercase;
        padding-top: 16px;
        border-top: 1px solid ${theme.colors.neutral_lightgrey};
      }
    `;
  }};
`;

export default BasketSummaryStyled;
