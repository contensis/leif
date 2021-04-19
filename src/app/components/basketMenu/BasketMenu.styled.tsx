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
      .basket-menu__items-wrapper {
        width: 100%;
        max-width: 256px;
        margin: 24px 0;
        span {
          display: block;
        }
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
            padding-top: 80px;
            flex-direction: column;
            align-items: center;
            @media ${theme.mq.laptop} {
              width: 370px;
            }
          }
          .basket-menu__btn--close {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 99;
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
