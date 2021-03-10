import styled, { css } from 'styled-components';

const BlogDetailStyled = styled.div`
  ${({ theme }) => {
    return css`
      ${theme.typeStyles.smallCopy};
      .blog-details__readtime,
      .blog-details__date {
        display: inline-block;
      }
      .blog-details__date {
        position: relative;
        padding-right: 8px;
        margin-right: 8px;
        &:before {
          content: '';
          position: absolute;
          top: 50%;
          right: -2px;
          background-color: ${theme.colors.primary_light};
          border-radius: 50%;
          transform: translateY(-50%);
          height: 4px;
          width: 4px;
        }
      }
    `;
  }};
`;

export default BlogDetailStyled;
