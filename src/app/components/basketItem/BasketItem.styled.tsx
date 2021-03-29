import styled, { css } from 'styled-components';

const BasketItemStyled = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      &:not(:last-child) {
        border-bottom: 2px solid ${theme.colors.neutral_lightgrey};
        padding-bottom: 8px;
        margin-bottom: 8px;
      }
      .basket-item__title {
        ${theme.typeStyles.cardCopy};
        font-family: ${theme.typeStyles.fontFamily.headings};
      }
    `;
  }};
`;

export default BasketItemStyled;
