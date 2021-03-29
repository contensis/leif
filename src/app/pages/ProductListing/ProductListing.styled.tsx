import styled, { css } from 'styled-components';

const ProductListingStyled = styled.div`
  ${() => {
    return css`
      .product-listing__title {
        margin: 0 auto 54px;
        text-align: center;
      }
    `;
  }};
`;

export default ProductListingStyled;
