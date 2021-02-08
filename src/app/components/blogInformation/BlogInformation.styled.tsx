import styled, { css } from 'styled-components';

const BlogInformationStyled = styled.div`
  ${({ theme }) => {
    return css`
      text-align: center;
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
        color: ${theme?.colors?.secondary_light};
        ${theme?.typeStyles?.smallCopy};
        @media ${theme.mq.tablet} {
          margin-top: 16px;
        }
      }
      .blog-info__readtime,
      .blog-info__date {
        display: inline-block;
      }
      .blog-info__date {
        position: relative;
        padding-right: 8px;
        margin-right: 8px;
        &:before {
          content: '';
          position: absolute;
          top: 50%;
          right: -2px;
          background-color: ${theme?.colors?.primary_light};
          border-radius: 50%;
          transform: translateY(-50%);
          height: 4px;
          width: 4px;
        }
      }
    `;
  }};
`;

export default BlogInformationStyled;
