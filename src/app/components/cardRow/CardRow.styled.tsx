import styled, { css } from 'styled-components';

const CardRowStyled = styled.div`
  ${({ theme }) => {
  return css`
    @media ${theme.mq.desktop} {
      display: flex;
    }
    .card-row__card {
      margin-bottom: 48px;
      @media ${theme.mq.desktop} {
        max-width: 100%;
        margin: 0;
        &:not(:last-child) {
          margin-right: 8px;
        }
      }
    }
    .card-row__cards {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      @media ${theme.mq.desktop} {
        flex-wrap: nowrap;
      }
    }
    .card-row__related-links {
      max-width: 400px;
      width: 100%;
      margin: 16px auto 0;
      @media ${theme.mq.desktop} {
        margin: 0 0 0 34px;
      }
    }
  `;
  }};
`;

export default CardRowStyled;
