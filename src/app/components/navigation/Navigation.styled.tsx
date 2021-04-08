import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  ref?: any;
  showSecondMenu: boolean;
}

const NavigationStyled = styled.div`
  ${({ theme, showSecondMenu }: Props) => {
    return css`
      position: relative;
      height: 80px;
      .nav__btn-open,
      .nav__btn-close {
        margin: 0;
        padding: 0;
        border: none;
        background: transparent;
      }
      .nav__btn-close {
        position: absolute;
        right: 0;
        top: 0;
      }
      .nav-menu__wrapper {
        display: flex;
        align-items: flex-start;
        position: absolute;
        right: 0;
        top: 0;
      }
      .nav-menu__items {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        list-style: none;
        width: 320px;
        height: 100vh;
        margin: 0;
        padding: 112px 24px 0;
        background-color: ${theme.colors.secondary};
        li {
          width: 100%;
          &:before {
            display: none;
          }
        }
        @media ${theme.mq.tablet} {
          width: 370px;
        }
        @media ${theme.mq.laptop} {
          padding: 144px 24px 0;
        }
      }
      .nav-menu__item {
        ${theme.typeStyles.h3};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: ${theme.colors.neutral_white};
        text-decoration: none;
        text-align: left;
        background: transparent;
        border: none;
        padding: 0;
        margin: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:hover {
          text-decoration: underline;
        }
      }
      .active {
        color: ${theme.colors.primary};
        box-shadow: inset 6px 0px 0px ${theme.colors.primary};
        padding: 0 0 0 16px;
      }
      .nav-menu__back-btn {
        button {
          background: transparent;
          border: none;
        }
        @media ${theme.mq.laptop} {
          display: none;
        }
      }
      .nav-menu__level-one {
        animation: slideIn 200ms;
      }
      ${showSecondMenu &&
        css`
          animation: slideIn 200ms;
          .nav-menu__level-one {
            display: none;
            @media ${theme.mq.laptop} {
              display: block;
            }
          }
        `}
      .nav-menu__level-two {
        background-color: ${theme.colors.neutral_white};
        .nav-menu__item {
          ${theme.typeStyles.h4};
          color: ${theme.colors.neutral_charcoal};
        }
      }
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
  }}
`;

export default NavigationStyled;
