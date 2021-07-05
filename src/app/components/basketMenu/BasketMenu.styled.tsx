import styled, { css } from 'styled-components';
import colors from '~/theme/global/colors';

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
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: ${colors.neutral_white};
        span {
          position: absolute;
          top: 32px;
          left: 32px;
          background: ${colors.secondary};
          color: ${colors.primary};
          border-radius: 50%;
          width: 24px;
          height: 24px;
          text-align: center;
          line-height: 24px;
          ${theme.typeStyles.smallCopy};
          font-family: ${theme.typeStyles.fontFamily.headings};
        }
        @media ${theme.mq.laptop} {
          width: 80px;
          height: 80px;
          span {
            top: 40px;
            left: 40px;
          }
        }
      }
      .basket-menu__btn--close {
        margin-left: auto;
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
      .basket-menu__items {
        height: 380px;
        overflow-y: scroll;
        padding: 0 8px 0 0;
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-thumb {
          background: ${theme.colors.neutral_lightgrey};
        }
        ::-webkit-scrollbar-track {
          background: ${theme.colors.neutral_white};
        }
      }
      .basket-menu__items-wrapper {
        padding: 0 24px;
        .basket-menu__item {
          margin-bottom: 64px;
        }
      }
      .basket-menu__checkout {
        margin: 40px auto 0;
        display: block;
      }
      .basket-menu__product-link {
        margin: 0 auto;
      }
      .basket-menu__content-wrapper {
        display: none;
      }
      .basket-menu__icon {
        background-size: contain;
        width: 60px;
        height: 40px;
        margin: 0 auto;
      }
      .basket-menu__text {
        margin: 16px 0 40px 0;
        text-align: center;
      }
      ${isBasketOpen &&
      css`
        .basket-menu__content-wrapper {
          overflow-y: scroll;
          padding-bottom: 16px;
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
          ::-webkit-scrollbar {
            display: none;
          }
          ::-webkit-scrollbar-thumb {
            display: none;
          }
          ::-webkit-scrollbar-track {
            display: none;
          }
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
