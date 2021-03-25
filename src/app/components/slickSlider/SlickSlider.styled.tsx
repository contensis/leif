import styled, { css } from 'styled-components';

const SlickSliderStyled = styled.div`
  ${({ theme }) => {
    return css`
      .slider-nav {
        margin-top: 24px;
        .slick-cloned {
          display: none !important;
        }
        .slick-track {
          margin-left: auto;
        }
        .slick-slide {
          padding: 0 12px;
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
