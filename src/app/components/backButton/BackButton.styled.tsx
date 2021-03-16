import styled, { css } from 'styled-components';

const BackButtonStyled = styled.a`
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
        .back-button__text {
          text-decoration: none;
        }
      }
      .back-button__text {
        margin-left: 8px;
        text-decoration: underline;
      }
      .back-button__icon {
        height: 24px;
        width: 24px;
      }
    `;
  }};
`;

export default BackButtonStyled;
