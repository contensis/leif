import styled, { css } from 'styled-components';

const IconWithTextStyled = styled.div`
  ${({ theme }) => {
    return css`
      text-align: center;
      @media ${theme.mq.tablet} {
        text-align: left;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
      }
      .icon-with-text__icon {
        margin: 0 auto;
        height: 40px;
        max-width: 40px;
        width: 100%;
        @media ${theme.mq.tablet} {
          margin: 0;
        }
      }
      .icon-with-text__wrapper {
        margin-top: 24px;
        @media ${theme.mq.tablet} {
          margin: 0 0 0 24px;
        }
      }
      .icon-with-text__title {
        margin: 0;
        ${theme.typeStyles.h5};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: ${theme.colors.secondary};
      }
      .icon-with-text__text {
        margin: 8px 0 0 0;
      }
    `;
  }};
`;

export default IconWithTextStyled;
