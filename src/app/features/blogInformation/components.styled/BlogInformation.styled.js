import styled, { css } from 'styled-components';

const BlogInformationStyled = styled.div`
  ${() => {
    return css`
      .biAuthor {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .biInfo {
        margin-top: 16px;
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
