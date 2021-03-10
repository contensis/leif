import styled, { css } from 'styled-components';

const CardSliderStyled = styled.div`
  ${({ theme }) => {
    return css`
      position: relative;
      overflow-x: hidden;
      .card-slider__image-wrapper {
        position: relative;
      }
      .card-slider__image {
        height: 480px;
        width: 100%;
        object-fit: cover;
        display: block;
        @media ${theme.mq.desktop} {
          height: 800px;
        }
      }
      .card-slider__image-overlay {
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
      .card-slider__content-wrapper {
        @media ${theme.mq.desktop} {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }
      .card-slider__hero-content {
        svg path {
          fill: none;
          stroke: ${theme.colors.secondary};
        }
        @media ${theme.mq.desktop} {
          max-width: 520px;
        }
      }
      .card-slider__slider {
        margin: 40px auto 0;
        max-width: 810px;
        width: 100%;
        @media ${theme.mq.desktop} {
          margin-left: 630px;
        }
      }
      .slick-slide {
        width: unset !important;
        > div:first-child {
          width: max-content;
        }
      }
      .slick__product-slide {
        margin-left: 40px;
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
          left: -80px !important;
        }
      }
    `;
  }}
`;

export default CardSliderStyled;
