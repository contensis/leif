import styled, { css } from 'styled-components';

const ContentBlockRowStyled = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      @media ${theme.mq.desktop} {
        align-items: stretch;
        flex-direction: row;
      }
      .content-block__card {
        max-width: 368px;
        width: 100%;
        &:not(:first-child) {
          margin: 64px 0 0 0;
        }
        @media ${theme.mq.desktop} {
          &:not(:first-child) {
            margin: 0 0 0 40px;
          }
        }
      }
    `;
  }};
`;

export default ContentBlockRowStyled;
