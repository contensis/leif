import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  ref?: any;
  isBasketOpen: boolean
}

const BasketMenuStyled = styled.div`
  ${({ theme, isBasketOpen }:Props) => {
  return css`
    display: flex;
    flex-direction: row-reverse;
    .basket-menu__content-wrapper {
      display: none;
      margin-top: 80px;
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
    .basket-menu__icon {
      width: 60px;
      height: 40px;
    }
    .basket-menu__text {
      margin: 16px 0 40px 0;
    }
    ${isBasketOpen && css`
      animation: slideIn 200ms;
      background-color: ${theme?.colors?.neutral_white};
      height: 100vh;
      width: 320px;
      position: absolute;
      top: 0;
      right: 0;
      @media ${theme.mq.laptop} {
        width: 370px;
      }
      .basket-menu__btn {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 99;
      }
      .basket-menu__content-wrapper {
        display: flex;
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
