import styled, { css } from 'styled-components';

const IconWithTextStyled = styled.div`
  ${({ theme }) => {
  return css`
      text-align: center;
      .icon-with-text__icon {
        height: 40px;
        width: 40px;
      }
      .icon-with-text__wrapper {
        margin-top: 28px;
      }
      .icon-with-text__title { 
        margin: 0;
        ${theme?.typeStyles?.h5};
        font-family: ${theme?.typeStyles?.fontFamily?.headings};
        color: ${theme?.colors?.secondary};
      }
      .icon-with-text__text {
        margin: 8px 0 0 0;
      }
    `;
  }};
`;

export default IconWithTextStyled;
