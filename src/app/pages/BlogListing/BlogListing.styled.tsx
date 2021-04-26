import styled, { css } from 'styled-components';

const BlogListingStyled = styled.div`
  ${() => {
    return css`
      padding-bottom: 120px;
      .blog-listing__title {
        margin: 0 auto 54px;
        text-align: center;
      }
    `;
  }};
`;

export default BlogListingStyled;
