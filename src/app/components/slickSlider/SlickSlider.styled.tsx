import styled, { css } from 'styled-components';

const SlickSliderStyled = styled.div`
  ${({ theme }) => {
    return css`
      .slider-nav {
        margin-top: 24px;
        .slick-track {
          margin-left: auto;
          width: 100% !important;
          max-width: 730px;
          transform: unset !important;
        }
        .slick-slide {
          width: 102px !important;
          height: 96px !important;
          padding: 0;
          margin: 0 12px;
        }
      }
      .slick__main-slide {
        display: block;
        height: 320px;
        width: 100%;
        @media ${theme.mq.laptop} {
          height: 648px;
        }
      }
      .slick__slide-thumbnail {
        height: 96px;
      }
      .slick-track {
        display: flex !important;
      }
      .slick-slide {
        height: inherit !important;
      }
      .slick__product-slide {
        margin: 0 auto;
        @media ${theme.mq.desktop} {
          margin: 0;
        }
      }
      .slick-arrow {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.secondary};
        height: 40px;
        width: 40px;
        border: none;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        z-index: 1;
        transition: opacity 100ms ease-in-out;
        &:hover {
          opacity: 0.8;
        }
        > div:first-child {
          margin: 0 auto;
        }
      }
      .slick-prev {
        left: 16px;
        @media ${theme.mq.laptop} {
          left: 40px;
        }
      }
      .slick-next {
        right: 16px;
        @media ${theme.mq.laptop} {
          right: 40px;
        }
      }
    `;
  }}
`;

export default SlickSliderStyled;
