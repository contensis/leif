import styled, { css } from 'styled-components';

const BlogInformationStyled = styled.div`
  ${({ theme }) => {
    return css`
      text-align: center;
      width: 100%;
      @media ${theme.mq.laptop} {
        text-align: left;
      }
      .blog-info__author {
        display: flex;
        align-items: center;
        justify-content: center;
        @media ${theme.mq.laptop} {
          justify-content: space-between;
        }
      }
      .blog-info__socials {
        display: none;
        @media ${theme.mq.laptop} {
          display: flex;
        }
      }
      .blog-info__wrapper {
        margin-top: 24px;
        color: ${theme.colors.secondary_light};
        ${theme.typeStyles.smallCopy};
        @media ${theme.mq.tablet} {
          margin-top: 16px;
        }
      }
    `;
  }};
`;

export default BlogInformationStyled;
