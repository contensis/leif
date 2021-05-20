import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  isSecondMenuOpen: boolean;
}

const NavigationSidebarStyled = styled.div`
  ${({ theme, isSecondMenuOpen }: Props) => {
    return css`
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.neutral_white};
      position: absolute;
      top: 0;
      right: 0;
      width: 320px;
      height: 100vh;
      @media ${theme.mq.laptop} {
        width: 370px;
        right: 0;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        position: unset;
        li {
          position: unset;
          &:before {
            display: none;
          }
        }
      }
      button,
      a {
        ${theme.typeStyles.h3};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: ${theme.colors.neutral_white};
        text-decoration: none;
      }
      .nav__menu-btn--close {
        margin-left: auto;
        display: block;
        background-color: ${theme.colors.primary};
        border: none;
        width: 64px;
        height: 64px;
        position: relative;
        z-index: 2;
        > div:first-child {
          margin: 0 auto;
        }
        @media ${theme.mq.laptop} {
          position: absolute;
          top: 0;
          right: 0;
          width: 80px;
          height: 80px;
        }
      }
      .nav__menu-btn {
        border: none;
        padding: 0;
        margin: 0;
        background-color: transparent;
      }
      .nav__menu-btn--back {
        button {
          border: none;
          padding: 0;
          margin: 0;
          background-color: transparent;
        }
        @media ${theme.mq.laptop} {
          display: none;
        }
      }
      .nav__menu-btn {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .nav__menu--first,
      .nav__menu--second {
        padding: 0 24px;
      }
      .nav__menu--first {
        padding-top: 48px;
        @media ${theme.mq.laptop} {
          padding-top: 128px;
        }
      }
      .nav__menu--second {
        background-color: ${theme.colors.neutral_white};
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        padding-top: 112px;
        @media ${theme.mq.laptop} {
          right: -370px;
          padding-top: 136px;
        }
        a {
          color: ${theme.colors.neutral_charcoal};
          ${theme.typeStyles.h4};
        }
      }
      .nav__socials {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 44px;
        left: 50%;
        transform: translateX(-50%);
        a {
          display: block;
          transition: opacity 200ms ease-in;
          &:not(:last-child) {
            margin-right: 32px;
          }
          &:hover {
            opacity: 0.6;
          }
        }
        @media ${theme.mq.laptop} {
          justify-content: flex-start;
          bottom: 64px;
          left: 24px;
          transform: translateX(0);
        }
      }
      .isActive {
        box-shadow: inset 6px 0px 0px ${theme.colors.primary};
        color: ${theme.colors.primary};
        padding-left: 16px;
      }
      ${isSecondMenuOpen &&
      css`
        @media ${theme.mq.laptop} {
          animation: slideIn 200ms;
          right: 370px;
        }
        .nav__socials {
          display: none;
          @media ${theme.mq.laptop} {
            display: flex;
          }
        }
        .nav__menu-btn--close {
          @media ${theme.mq.laptop} {
            right: -370px;
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
  }}
`;

export default NavigationSidebarStyled;
