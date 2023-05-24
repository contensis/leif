import styled, { css } from 'styled-components';

const LandingHeroStyled = styled.div`
  ${({ theme, src }: { src: string }) => {
    return css`
      margin-top: -84px;
      position: relative;
      background-image: url(${src});
      background-size: cover;
      background-position: top;
      background-repeat: no-repeat;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 0 16px;
      min-height: 800px;
      &:before {
        content: '';
        background: linear-gradient(
          180deg,
          rgba(43, 47, 81, 0.4) 15.88%,
          rgba(43, 47, 81, 0) 100%
        );
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
      }
      @media ${theme.mq.desktop} {
        display: block;
        padding: 168px 0;
        background-size: cover;
        background-position: center;
      }
      .landing-hero__content {
        position: relative;
        z-index: 2;
        text-align: center;
        max-width: 800px;
        width: 100%;
        padding: 40px 16px;
        background: ${theme.colors.neutral_white};
        border-radius: 8px 8px 0 0;
        box-shadow: 0px -16px 24px rgba(56, 33, 146, 0.07);
        @media ${theme.mq.desktop} {
          max-width: 590px;
          box-shadow: 0px 16px 24px rgba(56, 33, 146, 0.07);
          padding: 56px 40px 56px 80px;
          border-radius: 0 8px 8px 0;
          text-align: left;
        }
      }
      .landing-hero__title {
        margin: 0 0 16px;
      }
      .landing-hero__summary {
        margin: 0 auto 40px;
        max-width: 590px;
        width: 100%;
      }
      .landing-hero__btn {
        margin: 0 auto;
        @media ${theme.mq.desktop} {
          margin: 0;
        }
      }
    `;
  }}
`;

export default LandingHeroStyled;
