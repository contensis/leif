import styled, { css } from 'styled-components';

const IconButtonStyled = styled.button`
  ${() => {
    return css`
      position: relative;
      background: transparent;
      height: 80px;
      width: 80px;
      border: none;
      margin: 0;
      padding: 0;
      .ibWrapper {
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
