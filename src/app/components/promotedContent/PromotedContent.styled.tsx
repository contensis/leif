import styled, { css } from 'styled-components';

const PromotedContentStyled = styled.div`
  ${({ theme }) => {
    return css`
      .promoted-content__title {
        ${theme.typeStyles.h3};
        text-align: center;
        margin-bottom: 4px;
      }
      .promoted-content__results {
        display: flex;
        justify-content: flex-start;
        overflow-x: auto;
        white-space: nowrap;
        padding: 32px 0;
        @media ${theme.mq.desktop} {
          justify-content: center;
          overflow-x: auto;
        }
      }
      .promoted-content__card {
        max-width: 288px;
        min-width: 288px;
        width: 100%;
        .card__title {
          white-space: break-spaces;
        }
      }
      .promoted-content__link {
        margin: 80px auto 0;
        display: block;
        @media ${theme.mq.desktop} {
          margin-top: 40px;
        }
      }
    `;
  }};
`;

export default PromotedContentStyled;
