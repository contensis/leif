import styled, { css } from 'styled-components';

const ProductPageStyled = styled.div`
  ${({ theme }) => {
    return css`
      padding-bottom: 120px;
      .product-page__content {
        max-width: 840px;
      }
      .related-content__card {
        @media ${theme.mq.laptop} {
          max-width: 100% !important;
          flex-basis: calc(620px - 32px);
        }
      }
    `;
  }};
`;

export default ProductPageStyled;
