import styled, { css } from 'styled-components';

const BlogListingStyled = styled.div`
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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        > * {
          @media ${theme.mq.laptop} {
            flex-basis: calc((100% / 2) - 40px);
            margin-right: 40px;
            margin-bottom: 40px;
            &:nth-child(2n) {
              margin-right: 0;
            }
          }
          @media ${theme.mq.desktop} {
            flex-basis: calc((100% / 3) - 40px);
            margin-right: 40px;
            margin-bottom: 40px;
            &:nth-child(2n) {
              margin-right: 40px;
            }
            &:nth-child(3n) {
              margin-right: 0;
            }
          }
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

export default BlogListingStyled;
