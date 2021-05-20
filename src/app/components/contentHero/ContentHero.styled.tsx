import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  bgImageUri: string;
}

const ContentHeroStyled = styled.div`
  ${({ theme, bgImageUri }: Props) => {
    return css`
      position: relative;
      padding-top: 140px;
      text-align: center;
      max-width: 730px;
      width: 100%;
      margin: 0;
      @media ${theme.mq.laptop} {
        text-align: left;
        margin: 0;
      }
      .content-hero__content {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }
      .content-hero__back-btn {
        color: ${theme.colors.secondary_light};
        align-self: flex-start;
        position: absolute;
        top: 0;
        left: auto;
      }
      .content-hero__title {
        background-color: ${theme.colors.neutral_white};
        border-radius: 8px 8px 0px 0px;
        padding: 16px 0 0 0;
        max-width: 950px;
        width: 100%;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          background-image: url('/static/img/svgs/shapes/generic-hero-shape.svg');
          background-repeat: no-repeat;
          height: 80px;
          width: 220px;
        }
        @media ${theme.mq.laptop} {
          &:before {
            left: 0;
            transform: unset;
          }
        }
      }
      ${bgImageUri &&
      css`
        position: relative;
        padding-top: 0;
        text-align: left;
        max-width: unset;
        width: 100%;
        margin: -100px 0 0 0;
        background-image: url(${bgImageUri});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 640px;
        &:before {
          content: '';
          background: linear-gradient(
            180deg,
            rgba(43, 47, 81, 0.4) 15.88%,
            rgba(43, 47, 81, 0) 100%
          );
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 0;
        }
        @media ${theme.mq.laptop} {
          margin: -84px 0 0 0;
        }
        .content-hero__content {
          margin: 0;
          padding: 0 16px;
          @media ${theme.mq.laptop} {
            padding: 0 80px;
          }
        }
        .content-hero__back-btn {
          color: ${theme.colors.neutral_white};
          top: 92px;
          left: 16px;
          @media ${theme.mq.laptop} {
            top: 116px;
            left: auto;
          }
        }
        .content-hero__title {
          box-shadow: 0px -16px 24px rgba(56, 33, 146, 0.07);
          padding: 40px 16px;
          &:before {
            display: none;
          }

          @media ${theme.mq.laptop} {
            padding: 32px 55px;
          }
          @media ${theme.mq.desktop} {
            padding: 64px 110px;
          }
        }
      `}
    `;
  }};
`;

export default ContentHeroStyled;
