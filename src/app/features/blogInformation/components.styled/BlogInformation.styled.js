import styled, { css } from 'styled-components';

const BlogInformationStyled = styled.div`
  ${({ theme }) => {
    return css`
      text-align: center;
      @media ${theme.mq.laptop} {
        text-align: left;
      }
      .biAuthor {
        display: flex;
        align-items: center;
        justify-content: center;
        @media ${theme.mq.laptop} {
          justify-content: space-between;
        }
      }
      .biSocials {
        display: none;
        @media ${theme.mq.laptop} {
          display: flex;
        }
      }
      .biInfo {
        margin-top: 24px;
        color: ${theme.colors.kimberly};
        ${theme?.typeStyles?.smallCopy};
        @media ${theme.mq.laptop} {
          margin-top: 16px;
        }
      }
      .biInfo,
      .biDate {
        display: inline-block;
      }
      .biDate {
        position: relative;
        padding-right: 8px;
        margin-right: 8px;
        &:before {
          content: '';
          position: absolute;
          top: 50%;
          right: -2px;
          background-color: #39b28e; //TODO: needs to be a theme variable.
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
