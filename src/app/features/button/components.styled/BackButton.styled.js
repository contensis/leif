import styled, { css } from 'styled-components';

const BackButtonStyled = styled.button`
  ${() => {
    return css`
      display: inline-flex;
      align-items: center;
      text-decoration: underline;
      background: transparent;
      border: none;
      font-family: inherit;
      font-size: inherit;
      color: #6e729b;
      cursor: pointer;
      &:hover {
        text-decoration: none;
      }
      .bbText {
        margin-left: 8px;
      }
      .bbIcon {
        path {
          stroke: #6e729b;
        }
      }
    `;
  }};
`;

export default BackButtonStyled;
