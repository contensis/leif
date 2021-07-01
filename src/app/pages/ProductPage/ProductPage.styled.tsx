import styled, { css } from 'styled-components';

const ProductPageStyled = styled.div`
  ${({ theme }) => {
    return css`
      position: relative;
      padding-bottom: 120px;
      .product-page__scroll-container {
        display: flex;
        flex-direction: column;
        @media ${theme.mq.desktop} {
          flex-direction: row;
        }
      }
      .product-page__content {
        width: 100%;
        margin-top: 40px;
        @media ${theme.mq.desktop} {
          max-width: 50%;
          margin: 0 40px 0 0;
        }
      }
      .promoted-content__card {
        @media ${theme.mq.desktop} {
          max-width: 100% !important;
          flex-basis: calc(620px - 32px);
        }
      }
      .product-page__quote {
        max-width: 100%;
        width: 100%;
        margin: 0;
      }
      .product-page__back-btn {
        margin: 0 0 16px 16px;
        @media ${theme.mq.desktop} {
          margin: 0 0 16px 80px;
        }
      }
    `;
  }};
`;

export default ProductPageStyled;
