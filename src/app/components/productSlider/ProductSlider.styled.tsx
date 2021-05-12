import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  bgImageUri: string;
}

const CardSliderStyled = styled.div`
  ${({ theme, bgImageUri }: Props) => {
    return css`
      position: relative;
      padding: 200px 0 80px;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${bgImageUri});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
      @media ${theme.mq.desktop} {
        overflow-x: hidden;
        padding: 156px 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        justify-content: space-between;
      }
      .slick-slide {
        width: 290px !important;
      }
      .slick__product-slide {
        box-shadow: 0px 16px 24px rgba(56, 33, 146, 0.07);
      }
      .card-slider__image {
        display: none;
        height: 480px;
        width: 100%;
        object-fit: cover;
        display: block;
        @media ${theme.mq.desktop} {
          height: 800px;
        }
      }
      .card-slider__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          0.32deg,
          #ffffff 4.3%,
          rgba(255, 255, 255, 0) 74.66%
        );
        @media ${theme.mq.desktop} {
          background: linear-gradient(
            270deg,
            #ffffff 41.39%,
            rgba(255, 255, 255, 0) 69.1%
          );
        }
      }
      .card-slider__hero-content {
        margin: 0 16px;
        @media ${theme.mq.desktop} {
          max-width: 520px;
          width: 100%;
          margin: 0;
          position: relative;
          top: unset;
          left: unset;
          transform: unset;
        }
      }
      .card-slider__slider {
        margin: 40px auto 0;
        @media ${theme.mq.desktop} {
          padding: 0 0 0 80px;
          margin: 0;
          width: 50%;
        }
        @media ${theme.mq.xlargeDesktop} {
          width: 60%;
        }
      }
      .slick-slide {
        padding: 0 8px;
      }
      .slick-list {
        padding: 32px 0;
      }
      .slick-next {
        display: none !important;
        @media ${theme.mq.desktop} {
          display: block !important;
        }
      }
      .slick-prev {
        display: none !important;
        @media ${theme.mq.desktop} {
          display: block !important;
          left: -72px !important;
        }
      }
    `;
  }}
`;

export default CardSliderStyled;
