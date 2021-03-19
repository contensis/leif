import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  bgImage: string;
}

const ContentHeroStyled = styled.div`
  ${({ theme, bgImage }: Props) => {
    return css`
      margin-top: -84px;
      position: relative;
      background-image: url(${bgImage});
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
      .content-hero__content {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 16px 16px 0;
        @media ${theme.mq.desktop} {
          padding: 16px 80px 0;
        }
      }
      .content-hero__back-btn {
        color: ${theme.colors.neutral_white};
        align-self: flex-start;
        position: absolute;
        top: 124px;
        left: auto;
      }
      .content-hero__title {
        background-color: ${theme.colors.neutral_white};
        box-shadow: 0px -16px 24px rgba(56, 33, 146, 0.07);
        border-radius: 8px 8px 0px 0px;
        padding: 40px 16px;
        max-width: 950px;
        width: 100%;
        @media ${theme.mq.desktop} {
          padding: 64px 110px;
        }
      }
    `;
  }};
`;

export default ContentHeroStyled;
