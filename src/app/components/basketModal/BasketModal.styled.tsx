import styled, { css } from 'styled-components';

const BasketModalStyled = styled.div`
  ${({ theme }) => {
    return css`
      max-width: 400px;
      width: 100%;
      padding: 24px;
      background: ${theme.colors.neutral_white};
      box-shadow: 0px 16px 24px rgba(56, 33, 146, 0.07);
      .basket-modal__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        > div:first-child {
          display: flex;
          align-items: center;
        }
      }
      .basket-modal__tick--wrapper {
        background-color: ${theme.colors.primary};
        height: 24px;
        width: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 8px;
      }
      .basket-modal__button--close {
        background: transparent;
        border: 0;
        padding: 0;
      }
      .basket-modal__content--wrapper {
        display: flex;
        margin-top: 24px;
      }
      .basket-modal__content {
        margin-left: 16px;
        h3 {
          ${theme.typeStyles.h6};
          font-family: ${theme.typeStyles.fontFamily.headings};
        }
      }
      .basket-modal__product-image {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 4px;
      }
      .basket-modal__product-variant,
      .basket-modal__product-price {
        display: block;
      }
      .basket-modal__product-variant {
        ${theme.typeStyles.smallCopy};
        margin-top: 8px;
      }
      .basket-modal__product-price {
        ${theme.typeStyles.h6};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: ${theme.colors.secondary_light};
        margin-top: 8px;
      }
      .basket-modal__buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 24px;
        a:first-child {
          margin: 0 0 16px 0;
        }
        @media ${theme.mq.tablet} {
          a:first-child {
            margin: 0 16px 0 0;
          }
        }
      }
      .basket-modal__buttons a {
        ${theme.typeStyles.h6};
      }
      .basket-modal__button {
        @media ${theme.mq.tablet} {
          max-width: 168px;
        }
      }
    `;
  }};
`;

export default BasketModalStyled;
