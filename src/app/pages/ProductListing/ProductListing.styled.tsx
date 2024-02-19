import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      padding-bottom: 120px;
      .product-listing__title {
        margin: 0 auto;
        text-align: center;
        @media ${theme.mq.desktop} {
          margin: 0 auto 54px;
        }
      }
      .product-listing__quote {
        max-width: none;
        margin-top: 120px;
      }

      [data-component='generic-hero'] {
        padding: 0 16px;
      }
    `;
  }};
`;
