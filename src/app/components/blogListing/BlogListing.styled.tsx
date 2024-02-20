import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      .blog-listing__filters {
        max-width: 1280px;
        width: 100%;
        padding: 0 16px;
        margin: 64px auto 0;
        @media ${theme.mq.desktop} {
          margin-top: 104px;
        }
      }
      .filters__wrapper {
        justify-content: center;
      }
      .filter__dropdown {
        @media ${theme.mq.desktop} {
          max-width: 400px;
        }
      }
      .blog-listing__results {
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
      .blog-listing__load-more {
        margin: 0 auto;
      }
      .blog-listing__no-results {
        padding: 0 16px;
        margin-top: 40px;
      }
    `;
  }};
`;
