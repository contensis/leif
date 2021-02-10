import styled, { css } from 'styled-components';

interface Props {
  isModalOpen: boolean,
}

const ProductHeroStyled = styled.div<Props>`
  ${({ theme, isModalOpen }) => {
  return css`
    .product-hero__content {
      text-align: center;
      @media ${theme.mq.desktop} {
        text-align: left;
        display: flex;
      }
    }
    .product-hero__socials-wrapper {
      @media ${theme.mq.desktop} {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .product-hero__socials {
      display: none;
      @media ${theme.mq.desktop} {
        display: block;
      }
    }
    .product-hero__slider-wrapper {
      position: relative;
      @media ${theme.mq.desktop} {
        max-width: 50%;
        width: 100%;
      }
    }
    .product-hero__slider-fullsize {
      position: absolute;
      right: 28px;
      bottom: 136px;
      width: 40px;
      height: 40px;
      padding: 10px;
      background-color: ${theme?.colors?.neutral_white};
      border-radius: 50%;
      border: none;
      @media ${theme.mq.desktop} {
        width: 64px;
        height: 64px;
        padding: 20px;
      }
      transition: opacity 100ms ease-in-out;
        &:hover {
          opacity: 0.8;
        }
    }
    .product-hero__slider-fullsize svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .product-hero__wrapper {
      margin-top: 40px;
      @media ${theme.mq.desktop} {
        margin: 0 0 0 40px;
      }
    }
    .product-hero__title {
      margin-top: 32px;
    }
    .product-hero__text {
      margin-top: 24px;
    }
    .product-hero__price {
      margin-top: 24px;
      ${theme?.typeStyles?.h3};
      font-family: ${theme?.typeStyles?.fontFamily?.headings};
    }
    .product-hero__options {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      @media ${theme.mq.desktop} {
        justify-content: flex-start;
      } 
    }
    .product-hero__option {
      ${theme?.typeStyles?.smallCopy};
      font-family: ${theme?.typeStyles?.fontFamily?.default};
      font-weight: 400;
      margin-top: 32px;
      flex-basis: calc(154px - 24px);
      padding: 8px 16px;
      &:not(:first-child) {
        margin-left: 24px;
      }
    }
    .product-hero__input-wrapper {
      text-align: left;
      margin-top: 32px;
      display: flex;
      align-items: flex-end;
      @media ${theme.mq.desktop} {
        margin-top: 24px;
      }
    }
    .product-hero__input {
      max-width: 186px;
      width: 100%;
      @media ${theme.mq.desktop} {
        max-width: 86px;
      }
    }
    .product-hero__input-controls {
      display: flex;
      align-items: center;
      @media ${theme.mq.desktop} {
        margin-bottom: 8px;
      }
    }
    .product-hero__input-minus {
      margin-left: 16px;
    }
    .product-hero__input-plus {
      margin-left: 8px
    }
    .product-hero__btn {
      margin-top: 32px;
      @media ${theme.mq.desktop} {
        margin-top: 24px;
      }
    }
    /* Modal Styles */
    ${isModalOpen && css`
      .product-hero__modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:before {
          content: '';
          background-color: ${theme?.colors?.neutral_white};
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      .product-hero__modal-slider {
        width: 100%;
      }
      .product-hero__modal-close {
        position: absolute;
        right: 16px;
        top: 66px;
        z-index: 99;
        padding:0;
        border: none;
        background: none;
        line-height: 0;
        transition: opacity 100ms ease-in-out;
        &:hover {
          opacity: .8;
        }
      }
      .slider-for {
        max-width: 1060px;
        width: 100%;
        margin: 0 auto;
      }
      .slider-nav {
        max-width: 730px;
        width: 100%;
        margin: 24px auto 0;
      }
      .slick-next {
        @media ${theme.mq.largeDesktop} {
          right: -52px !important;
        }
      }
      .slick-prev {
        @media ${theme.mq.largeDesktop} {
          left: -52px !important;
        }
      }
    `}
  `;
  }};
`;

export default ProductHeroStyled;
