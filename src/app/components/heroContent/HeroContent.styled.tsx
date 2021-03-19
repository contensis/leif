import styled, { css } from 'styled-components';

const HeroContentStyled = styled.div`
  ${({ theme }) => {
    return css`
      text-align: center;
      background-color: ${theme.colors.neutral_white};
      box-shadow: 0px -16px 24px rgba(56, 33, 146, 0.07);
      border-radius: 8px 8px 0px 0px;
      position: relative;
      margin: -32% 16px 0%;
      padding: 40px 16px;
      @media ${theme.mq.desktop} {
        text-align: left;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        margin: 0;
        padding: 56px 40px 56px 80px;
        border-radius: 0px 8px 8px 0px;
        max-width: 590px;
        width: 100%;
      }
      .hero-content__summary {
        margin: 24px 0 0 0;
      }
      .hero-content__btn {
        margin: 40px auto 0;
        @media ${theme.mq.desktop} {
          margin: 40px 0 0;
        }
      }
    `;
  }}
`;

export default HeroContentStyled;
