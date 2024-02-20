import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      .product-listing__filters {
        max-width: 1280px;
        width: 100%;
        padding: 0 16px;
        margin: 64px auto 0;
        @media ${theme.mq.desktop} {
          margin-top: 104px;
        }
      }
      .filters__wrapper {
        justify-content: flex-start;
      }
      .filter__dropdown {
        @media ${theme.mq.desktop} {
          max-width: 400px;
        }
      }
      .product-listing__result {
        max-width: none;
      }
      .product-listing__results {
        max-width: 1280px;
        width: 100%;
        margin: 120px auto;
        display: grid;
        row-gap: 64px;
        column-gap: 40px;
        @media ${theme.mq.tablet} {
          grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
        }
      }
      .product-listing__load-more {
        margin: 0 auto;
      }
      .product-listing__no-results {
        padding: 0 16px;
        margin-top: 40px;
      }
    `;
  }};
`;
