import styled, { css } from 'styled-components';

const SlickSliderStyled = styled.div`
  ${({ theme }) => {
  return css`
    .slick__slide {
      display: block;
      height: 648px;
      width: 100%;
    }
    .slick__slide-thumbnail {
      max-width: 102px;
      width: 100%;
      height: 96px;
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
      left: 40px;
    }
    .slick-next {
      right: 40px;
    }
    `;
  }}
`;

export default SlickSliderStyled;
