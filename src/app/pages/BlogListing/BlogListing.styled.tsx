import styled, { css } from 'styled-components';

const BlogListingStyled = styled.div`
  ${() => {
    return css`
      padding-bottom: 120px;

      .blog-listing__title {
        margin: 0 auto 54px;
        text-align: center;
      }

      [data-component='generic-hero'] {
        padding: 0 16px;
      }
    `;
  }};
`;

export default BlogListingStyled;
