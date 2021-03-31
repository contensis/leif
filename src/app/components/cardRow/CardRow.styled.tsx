import styled, { css } from 'styled-components';

const CardRowStyled = styled.div`
  ${({ theme }) => {
    return css`
      @media ${theme.mq.desktop} {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .card-row__left-col {
        display: flex;
        justify-content: center;
        align-items: stretch;
        flex-wrap: wrap;
        @media ${theme.mq.desktop} {
          flex-wrap: nowrap;
          justify-content: flex-start;
        }
      }
      .card-row__right-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media ${theme.mq.desktop} {
          margin-left: 40px;
        }
      }
      .card-row__col-card {
        margin-bottom: 48px;
        max-width: 400px;
        width: 100%;
        @media ${theme.mq.desktop} {
          margin: 0;
          &:not(:last-child) {
            margin-right: 8px;
          }
        }
      }
      .card-row__col-card--small {
        max-width: 400px;
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        padding: 0;
        &:hover {
          box-shadow: none;
          .card__title {
            text-decoration: underline;
          }
        }
        &:not(:last-child) {
          margin-bottom: 24px;
          padding-bottom: 32px;
          border-bottom: 1px solid ${theme.colors.neutral_lightgrey};
        }
        .card__title {
          margin: 0;
        }
        img {
          margin: 0 16px 0 0;
          height: 80px;
          width: 74px;
        }
      }
    `;
  }};
`;

export default CardRowStyled;
