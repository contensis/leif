import styled, { css } from 'styled-components';

const SlickSliderStyled = styled.div`
  ${({ theme }) => {
  return css`
    .slider-nav {
      margin-top: 24px;
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
      padding: 0 12px;
    }
    .slick-arrow {
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme?.colors?.secondary};
      height: 40px;
      width: 40px;
      border: none;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      z-index: 1;
      svg path {
        fill: ${theme?.colors?.primary};
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