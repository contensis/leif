import styled, { css } from 'styled-components';
interface Props {
  theme: any;
  isToggled: boolean;
}

const HamburgerStyled = styled.div`
  ${({ theme, isToggled }: Props) => {
    return css`
      width: 64px;
      height: 64px;
      background: ${theme.colors.primary};
      position: relative;
      border: none;
      padding: 0;
      margin: 0;
      @media ${theme.mq.laptop} {
        height: 80px;
        width: 80px;
      }
      .hamburger__wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
        cursor: pointer;
      }
      .hamburger__layer {
        display: block;
        width: 100%;
        border-radius: 4px;
        height: 2px;
        background: ${theme.colors.secondary};
        transition: all 0.3s;
        position: relative;
        &:not(:last-child) {
          margin-bottom: 6px;
        }
      }
      .hamburger__layer {
        &:nth-child(1) {
          animation: ease 0.7s top-2 forwards;
        }
        &:nth-child(2) {
          animation: ease 0.7s scaled-2 forwards;
        }
        &:nth-child(3) {
          animation: ease 0.7s bottom-2 forwards;
        }
      }
      ${isToggled &&
      css`
        .hamburger__layer {
          &:nth-child(1) {
            animation: ease 0.7s top forwards;
          }
          &:nth-child(2) {
            animation: ease 0.7s scaled forwards;
          }
          &:nth-child(3) {
            animation: ease 0.7s bottom forwards;
          }
        }
      `}
      /* Animation */
      @keyframes top {
        0% {
          top: 0;
          transform: rotate(0);
        }
        50% {
          top: 8px;
          transform: rotate(0);
        }
        100% {
          top: 8px;
          transform: rotate(45deg);
        }
      }
      @keyframes top-2 {
        0% {
          top: 8px;
          transform: rotate(45deg);
        }
        50% {
          top: 8px;
          transform: rotate(0deg);
        }
        100% {
          top: 0;
          transform: rotate(0deg);
        }
      }
      @keyframes bottom {
        0% {
          bottom: 0;
          transform: rotate(0);
        }
        50% {
          bottom: 8px;
          transform: rotate(0);
        }
        100% {
          bottom: 8px;
          transform: rotate(135deg);
        }
      }
      @keyframes bottom-2 {
        0% {
          bottom: 8px;
          transform: rotate(135deg);
        }
        50% {
          bottom: 8px;
          transform: rotate(0);
        }
        100% {
          bottom: 0;
          transform: rotate(0);
        }
      }
      @keyframes scaled {
        50% {
          transform: scale(0);
        }
        100% {
          transform: scale(0);
        }
      }
      @keyframes scaled-2 {
        0% {
          transform: scale(0);
        }
        50% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
    `;
  }};
`;

export default HamburgerStyled;
