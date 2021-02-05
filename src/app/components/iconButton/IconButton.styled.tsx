import styled, { css } from 'styled-components';
interface Props {
  type: string;
}

const IconButtonStyled = styled.button<Props>`
  ${() => {
    return css`
      position: relative;
      background: transparent;
      height: 80px;
      width: 80px;
      border: none;
      margin: 0;
      padding: 0;
      .icon-btn__wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
        cursor: pointer;
      }
    `;
  }};
`;

export default IconButtonStyled;
