import styled, { css } from 'styled-components';

const ProductHeroContentStyled = styled.div`
  ${({ theme }) => {
    return css`
      padding: 42px 24px 0;
      width: 100%;
      text-align: center;
      @media ${theme.mq.desktop} {
        align-self: flex-start;
        position: sticky;
        top: 0;
        text-align: left;
        padding: 24px 0 0 0;
        margin: 24px 0 0 0;
      }
      .product-hero__basket-modal {
        position: absolute;
        top: 32px;
        right: 0;
        z-index: 2;
        @media ${theme.mq.desktop} {
          top: 0;
          right: 16px;
        }
      }
      .product-hero__socials-wrapper {
        @media ${theme.mq.desktop} {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .product-hero__socials {
        display: none;
        @media ${theme.mq.desktop} {
          display: block;
        }
      }
      .product-hero__wrapper {
        @media ${theme.mq.desktop} {
          max-width: 520px;
          width: 100%;
        }
      }
      .product-hero__title {
        margin-top: 16px;
      }
      .product-hero__text {
        margin-top: 24px;
      }
      .product-hero__price {
        margin-top: 24px;
        ${theme.typeStyles.h3};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: ${theme.colors.secondary};
      }
      .product-hero__options {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        @media ${theme.mq.desktop} {
          justify-content: flex-start;
        }
      }
      .product-hero__option {
        ${theme.typeStyles.smallCopy};
        font-family: ${theme.typeStyles.fontFamily.default};
        font-weight: 400;
        flex-basis: calc(154px - 24px);
        padding: 8px 16px;
        margin: 32px 12px 0;
        max-width: 154px;
        width: 100%;
        @media ${theme.mq.desktop} {
          margin: 24px 0 0;
          &:not(:last-child) {
            margin-right: 24px;
          }
        }
      }
      .product-hero__input-wrapper {
        text-align: left;
        margin-top: 32px;
        display: flex;
        align-items: flex-end;
        @media ${theme.mq.desktop} {
          margin-top: 24px;
        }
      }
      .product-hero__input {
        max-width: 186px;
        width: 100%;
        @media ${theme.mq.desktop} {
          max-width: 86px;
        }
      }
      .product-hero__input-controls {
        display: flex;
        align-items: center;
        @media ${theme.mq.desktop} {
          margin-bottom: 8px;
        }
      }
      .product-hero__input-minus {
        margin-left: 16px;
      }
      .product-hero__input-plus {
        margin-left: 8px;
      }
      .product-hero__btn {
        margin-top: 32px;
        @media ${theme.mq.desktop} {
          margin-top: 24px;
        }
      }
    `;
  }};
`;

export default ProductHeroContentStyled;
