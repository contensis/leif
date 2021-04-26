import styled, { css } from 'styled-components';

const BasketStyled = styled.div`
  ${({ theme }) => {
    return css`
      padding: 0 16px 120px;
      .basket__page-content {
        max-width: 1060px;
        width: 100%;
        margin: 0 auto;
      }
      .basket__title {
        text-align: center;
        @media ${theme.mq.desktop} {
          text-align: left;
          position: relative;
          padding-bottom: 88px;
          &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 100%;
            background-image: url('/static/img/svgs/shapes/footer-shape.svg');
            background-repeat: no-repeat;
            background-position: top right;
          }
        }
      }
      .basket__content {
        @media ${theme.mq.desktop} {
          display: flex;
          align-items: stretch;
          justify-content: space-between;
        }
      }
      .basket__item {
        margin-bottom: 40px;
        &:not(:first-child) {
          padding-top: 24px;
        }
      }
      .basket__items-wrapper {
        padding: 32px 0 64px;
        max-width: 620px;
        width: 100%;
        @media ${theme.mq.desktop} {
          padding: 0;
        }
      }
      .basket__checkout {
        display: block;
        margin: 40px auto 0;
        @media ${theme.mq.desktop} {
          max-width: 100%;
        }
      }
      .basket__paypal {
        text-align: center;
        display: block;
        border: 1px solid ${theme.colors.secondary};
        border-radius: 4px;
        margin: 24px auto 0;
        padding: 16px 0;
        height: 64px;
        max-width: 256px;
        width: 100%;
        img {
          width: 61px;
          height: 16px;
          object-fit: cover;
        }
        @media ${theme.mq.desktop} {
          max-width: 100%;
        }
      }
      .basket__summary {
        .basket-summary__title {
          margin-top: 0;
        }
        @media ${theme.mq.desktop} {
          max-width: 320px;
          width: 100%;
          margin-left: auto;
          .basket-summary__title {
            text-align: left;
          }
        }
      }
      .basket__related-content {
        margin: 120px 0 0 0;
      }
      .basket__empty {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        p {
          margin: 16px 0 0 0;
        }
      }
      .basket__product-link {
        margin-top: 40px;
      }
    `;
  }};
`;

export default BasketStyled;
