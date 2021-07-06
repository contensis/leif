import styled, { css } from 'styled-components';

const FeaturedProductStyled = styled.div`
  ${({ theme }) => {
    return css`
      text-align: center;
      overflow-x: hidden;
      @media ${theme.mq.laptop} {
        text-align: left;
        overflow-x: auto;
      }
      .featured-product__content {
        display: flex;
        align-items: center;
        flex-direction: column;
        max-width: 840px;
        width: 100%;
        margin-top: 80px;
        padding: 40px 16px;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 80%;
          left: 0;
          top: 0;
          background-color: ${theme.colors.neutral_lightgrey};
        }
        &:before {
          content: '';
          position: absolute;
          z-index: -1;
          top: -60px;
          right: -80px;
          height: 100%;
          width: 100%;
          background-image: url('/static/img/svgs/shapes/featured-product-shape.svg');
          background-repeat: no-repeat;
          background-size: contain;
        }
        @media ${theme.mq.laptop} {
          margin: 54px auto 32px;
          padding: 0 0 0 40px;
          justify-content: space-between;
          flex-direction: row;
          &:before {
            top: -54px;
            right: 64px;
            background-position: top right;
          }
          &:after {
            width: 100%;
            height: 392px;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
      .featured-product__content-wrapper {
        max-width: 472px;
        width: 100%;
        @media ${theme.mq.laptop} {
          margin-right: 16px;
        }
      }
      .featured-product__title {
        ${theme.typeStyles.h3};
        margin: 0;
      }
      .featured-product__text {
        ${theme.typeStyles.cardCopy};
        color: ${theme.colors.secondary};
        margin: 24px 0 0 0;
        a {
          &:hover {
            text-decoration: none;
          }
        }
      }
      .featured-product__btn {
        margin-top: 24px;
      }
      .featured-product__card {
        margin-top: 24px;
        box-shadow: 0px 16px 24px rgb(56 33 146 / 7%);
        &:hover {
          .card__title {
            text-decoration: underline;
          }
        }
        @media ${theme.mq.laptop} {
          margin: 0;
        }
      }
    `;
  }};
`;

export default FeaturedProductStyled;
