import styled, { css } from 'styled-components';

const RelatedContentStyled = styled.div`
  ${({ theme }) => {
    return css`
      .related-content__title {
        text-align: center;
        margin: 0;
      }
      .related-content__results {
        display: flex;
        flex-direction: column-reverse;
        @media ${theme.mq.laptop} {
          display: block;
        }
      }
      .related-content__results-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 64px;
        @media ${theme.mq.laptop} {
          margin-top: 48px;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: stretch;
        }
      }
      .related-content__card {
        padding: 16px;
        max-width: 368px;
        width: 100%;
        &:not(:last-child) {
          margin-bottom: 40px;
        }
        @media ${theme.mq.laptop} {
          margin: 16px;
          &:not(:last-child) {
            margin: 16px;
          }
        }
      }
      .related-content__link {
        display: block;
        margin: 40px auto 0;
        @media ${theme.mq.laptop} {
          margin: 48px auto 0;
        }
      }
    `;
  }}
`;

export default RelatedContentStyled;
