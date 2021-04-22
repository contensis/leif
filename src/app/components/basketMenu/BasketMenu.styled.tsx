import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  isBasketOpen: boolean;
}

const BasketMenuStyled = styled.div`
  ${({ theme, isBasketOpen }: Props) => {
    return css`
      display: flex;
      flex-direction: row-reverse;
      .basket-menu__btn--wrapper {
        cursor: pointer;
        position: relative;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          position: absolute;
          top: 40px;
          left: 40px;
          background: #2b2f51;
          color: #77e8c6;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          text-align: center;
          line-height: 24px;
          ${theme.typeStyles.smallCopy};
          font-family: ${theme.typeStyles.fontFamily.headings};
        }
      }
      .basket-menu__focus {
        width: 100%;
      }
      .basket-menu__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 24px;
        margin-bottom: 16px;
      }
      .basket-menu__title {
        text-align: center;
        margin: 40px 0 16px;
      }
      .basket-menu__items-wrapper {
        padding: 0 24px;
        .basket-menu__item {
          margin-bottom: 24px;
        }
      }
      .basket-menu__info {
        > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
      }
      .basket-menu__total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-transform: uppercase;
        padding-top: 16px;
        border-top: 1px solid ${theme.colors.neutral_lightgrey};
      }
      .basket-menu__checkout {
        margin: 40px auto 0;
        display: block;
      }
      .basket-menu__content-wrapper {
        display: none;
      }
      .basket-menu__icon {
        background-size: contain;
        width: 60px;
        height: 40px;
      }
      .basket-menu__text {
        margin: 16px 0 40px 0;
        text-align: center;
      }
      ${isBasketOpen &&
        css`
          .basket-menu__content-wrapper {
            animation: slideIn 200ms;
            background-color: ${theme.colors.neutral_white};
            height: 100vh;
            width: 320px;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 9;
            display: flex;
            flex-direction: column;
            align-items: center;
            @media ${theme.mq.laptop} {
              width: 370px;
            }
          }
        `}
      @keyframes slideIn {
        from {
          margin-right: -370px;
          animation-timing-function: ease-in;
        }
        to {
          animation-timing-function: ease-out;
        }
      }
    `;
  }};
`;

export default BasketMenuStyled;
