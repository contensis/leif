import styled, { css } from 'styled-components';
import Link from '../link/Link';

const BackButtonStyled = styled(Link)`
  ${({ theme }) => {
    return css`
      display: inline-flex;
      align-items: center;
      background: transparent;
      border: none;
      font-family: inherit;
      font-size: inherit;
      color: ${theme.colors.secondary_light};
      cursor: pointer;
      &:hover {
        text-decoration: none;
      }
      .back-button__text {
        margin-left: 8px;
      }
      .back-button__icon {
        height: 24px;
        width: 24px;
      }
    `;
  }};
`;

export default BackButtonStyled;
