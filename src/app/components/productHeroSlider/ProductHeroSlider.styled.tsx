import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  isModalOpen: boolean;
}

const ProductHeroSliderStyled = styled.div`
  ${({ theme, isModalOpen }: Props) => {
    return css`
      position: relative;
      overflow: hidden;
      padding: 40px 0 0 0;
      &:before {
        content: '';
        background-image: url('/static/img/svgs/shapes/product-hero-shape.svg');
        background-repeat: no-repeat;
        position: absolute;
        overflow-x: hidden;
        top: 0;
        right: -30%;
        height: 80px;
        max-width: 220px;
        width: 100%;
        z-index: 1;
      }
      @media ${theme.mq.tablet} {
        &:before {
          right: 0;
        }
      }
      @media ${theme.mq.desktop} {
        width: 100%;
        &:before {
          right: 70px;
        }
      }
      .product-hero-slider__fullsize {
        position: absolute;
        right: 16px;
        bottom: 136px;
        width: 40px;
        height: 40px;
        padding: 0;
        background-color: ${theme.colors.neutral_white};
        border-radius: 50%;
        border: none;
        transition: opacity 100ms ease-in-out;
        &:hover {
          opacity: 0.8;
        }
        @media ${theme.mq.desktop} {
          width: 64px;
          height: 64px;
        }
      }
      .product-hero-slider__fullsize-icon {
        margin: 0 auto;
      }
      /* Modal Styles */
      ${isModalOpen &&
      css`
        position: unset;
        overflow: unset;
        .product-hero-slider__modal-close {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 40px;
          height: 40px;
          background-color: transparent;
          border: none;
          padding: 0;
          div:first-child {
            margin: 0 auto;
          }
          @media ${theme.mq.mediumDesktop} {
            top: 18px;
            width: 80px;
            height: 80px;
          }
        }
        .product-hero-slider__modal {
          padding-top: 48px;
          position: absolute;
          top: -100px;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 999;
          background-color: ${theme.colors.neutral_white};
          @media ${theme.mq.laptop} {
            top: -124px;
          }
        }
        .slider-nav {
          max-width: 730px !important;
          margin: 24px auto 0 !important;
        }
        .product-hero-slider__modal-slider {
          .slider-nav .slick-track {
            justify-content: center;
          }
        }
      `}
    `;
  }}
`;

export default ProductHeroSliderStyled;
