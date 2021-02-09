import styled, { css } from 'styled-components';

const BlogPostStyled = styled.div`
  ${({ theme }) => {
  return css`
      margin: 0 auto;
      display:flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      max-width: 840px;
      flex-direction: column;
      }
    `;
  }};
`;

export default BlogPostStyled;
