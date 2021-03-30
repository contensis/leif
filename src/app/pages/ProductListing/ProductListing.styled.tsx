import styled, { css } from 'styled-components';

const ProductListingStyled = styled.div`
  ${() => {
    return css`
      padding-bottom: 120px;
      .product-listing__title {
        margin: 0 auto 54px;
        text-align: center;
      }
      .product-listing__quote {
        max-width: none;
      }
    `;
  }};
`;

export default ProductListingStyled;
