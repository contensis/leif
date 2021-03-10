import styled, { css } from 'styled-components';

const BackButtonStyled = styled.button`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      text-decoration: underline;
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
