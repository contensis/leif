import styled, { css } from 'styled-components';

const Header = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      .header__logo {
        align-self: center;
      }
      .header__actions {
        background: ${theme?.colors?.neutral_white};
        filter: drop-shadow(0px 16px 24px rgba(56, 33, 146, 0.07));
      }
    `;
  }};
`;

export default Header;
