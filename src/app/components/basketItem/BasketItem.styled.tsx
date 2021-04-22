import styled, { css } from 'styled-components';

const BasketItemStyled = styled.div`
  ${({ theme }) => {
    return css`
      .basket-item__content--wrapper {
        display: flex;
        align-items: flex-start;
      }
      .basket-item__content {
        margin-left: 8px;
        span {
          display: block;
          &:not(:last-child) {
            margin-bottom: 8px;
          }
        }
      }
      .basket-item__image {
        height: 88px;
        width: 80px;
        border-radius: 4px;
        object-fit: cover;
      }
      .basket-item__title {
        ${theme.typeStyles.h6};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: ${theme.colors.secondary};
      }
      .basket-item__variant {
        ${theme.typeStyles.smallCopy};
      }
      .basket-item__price {
        ${theme.typeStyles.h6};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: ${theme.colors.secondary_light};
      }
      .basket-item__input--wrapper {
        display: flex;
        align-items: center;
        margin-top: 16px;
      }
      .basket-item__input {
        margin-right: 16px;
        input {
          width: 84px;
          height: 40px;
        }
      }
      .basket-item__input-minus {
        margin-right: 8px;
      }
    `;
  }};
`;

export default BasketItemStyled;
