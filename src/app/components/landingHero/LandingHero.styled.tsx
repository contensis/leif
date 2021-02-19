import styled, { css } from 'styled-components';

const LandingHeroStyled = styled.div`
  ${({ theme }) => {
  return css`
      text-align: center;
      position: relative;
      @media ${theme.mq.laptop} {
        text-align: left;
      }
      .image-hero__image-wrapper {
        position: relative;
      }
      .image-hero__image {
        height: 512px;
        width: 100%;
        object-fit:  cover;
        display: block;
        @media ${theme.mq.laptop} {
          height: 800px;
        }
      }
      .image-hero__image-overlay {
        background: linear-gradient(180deg, rgba(43, 47, 81, 0.4) 15.88%, rgba(43, 47, 81, 0) 100%);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
      .image-hero__content {
        background-color: ${theme?.colors?.neutral_white};
        box-shadow: 0px -16px 24px rgba(56, 33, 146, 0.07);
        border-radius: 8px 8px 0px 0px;
        position: relative;
        margin: -50% 16px 0%;
        padding: 40px 16px;
        @media ${theme.mq.laptop} {
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
      }
      .image-hero__text {
        margin: 24px 0 0 0;
      }
      .image-hero__btn {
        margin: 40px auto 0;
        @media ${theme.mq.laptop} {
          margin: 40px 0 0;
        }
      }
    `;
  }}
`;

export default LandingHeroStyled;
