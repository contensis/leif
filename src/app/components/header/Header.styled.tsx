import styled, { css } from 'styled-components';
interface Props {
  theme?: any;
  ref?: any;
  isSearchOpen: boolean;
  isLight: boolean;
}

const HeaderStyled = styled.div`
  ${({ theme, isSearchOpen, isLight }: Props) => {
    return css`
      margin-bottom: ${isLight ? '0px' : '24px'};
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 9;
      transition: margin-right 280ms ease;
      @media ${theme.mq.laptop} {
        margin-bottom: ${isLight ? '0px' : '40px'};
      }
      .header__search-input {
        display: none;
        background-color: ${theme.colors.secondary};
        border: 1px solid ${theme.colors.secondary};
        color: ${theme.colors.neutral_white};
      }
      .header__logo {
        display: block;
        align-self: center;
        padding: 16px 0 0 16px;
        width: 95px;
        height: 65px;
        @media ${theme.mq.laptop} {
          padding: 24px 0 0 80px;
          width: 160px;
          height: 72px;
        }
      }
      .header__actions {
        position: fixed;
        top: 0;
        right: 0;
        display: flex;
        align-items: stretch;
        background: ${theme.colors.neutral_white};
        filter: drop-shadow(0px 16px 24px rgba(56, 33, 146, 0.07));
        height: 64px;
        @media ${theme.mq.laptop} {
          height: 80px;
        }
      }
      .header__search--wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        top: -6px;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        @media ${theme.mq.laptop} {
          top: -2px;
        }
      }
      ${isSearchOpen &&
      css`
        position: relative;
        margin-right: -122px;
        @media ${theme.mq.laptop} {
          margin-right: 0;
        }
        .header__search {
          justify-content: flex-end;
          margin-right: 0;
          @media ${theme.mq.laptop} {
            margin-right: 0;
          }
        }
      `};
    `;
  }};
`;

export default HeaderStyled;
