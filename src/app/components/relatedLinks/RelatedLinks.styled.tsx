import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      margin-top: 40px;

      ol {
        list-style: none;
        padding: 0;
        margin: 40px 0 0;
        li:not(:last-child) {
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid #f1f1f1;
        }
      }

      li a {
        ${theme.typeStyles.h5};
        font-family: ${theme.typeStyles.fontFamily.headings};
        color: #2b2f51;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    `;
  }};
`;
