import styled, { css } from 'styled-components';

const IconButtonStyled = styled.button`
  ${({ theme }) => {
    return css`
      height: 64px;
      width: 64px;
      position: relative;
      background: ${theme.colors.neutral_white};
      border: none;
      margin: 0;
      padding: 0;
      @media ${theme.mq.laptop} {
        height: 80px;
        width: 80px;
      }
      .icon-btn__wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
      }
    `;
  }};
`;

export default IconButtonStyled;
