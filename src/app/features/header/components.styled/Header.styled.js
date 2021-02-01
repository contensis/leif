import styled, { css } from 'styled-components';

const Header = styled.div`
  ${() => {
    return css`
      display: flex;
      justify-content: space-between;
      .hLogo {
        align-self: center;
      }
      .hActions {
        background: #fff;
        filter: drop-shadow(0px 16px 24px rgba(56, 33, 146, 0.07));
      }
    `;
  }};
`;

export default Header;
