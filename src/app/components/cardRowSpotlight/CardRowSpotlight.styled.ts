import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      max-width: 1280px;
      width: 100%;
      margin: 80px auto 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media ${theme.mq.desktop} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 40px;
        row-gap: 24px;
      }

      [data-layout='default'].card-row-spotlight__card {
        border-radius: 8px;
        transition: box-shadow 200ms ease-in-out;
        &:hover {
          cursor: pointer;
          box-shadow: 0 16px 24px 0 rgba(56, 33, 146, 0.07);
        }
        &:focus-within {
          box-shadow: none;
          outline: 2px solid var(--a11y);
          outline-offset: 2px;
          .explore-more__path {
            outline: none;
          }
        }
      }

      [data-layout='minimal'].card-row-spotlight__card {
        border-radius: 8px;
        &:hover {
          cursor: pointer;
          .card-row-spotlight__title {
            text-decoration: underline;
          }
        }
      }

      [data-layout='default'] {
        padding: 24px 16px;
        max-width: 400px;
        width: 100%;
        margin: 0 auto 64px;

        grid-row: span 3;

        .card-row-spotlight__title {
          margin-top: 24px;
        }

        img {
          max-width: 368px;
          width: 100%;
          border-radius: 4px;
        }

        @media ${theme.mq.desktop} {
          max-width: 368px;
          margin: 0;
        }
      }

      [data-layout='minimal'] {
        margin: 0 auto;
        max-width: 400px;
        width: 100%;
        display: flex;
        align-items: flex-start;

        grid-column: 3;
        align-self: start;

        .card-row-spotlight__title {
          margin-left: 16px;
        }

        img {
          min-width: 80px;
          max-width: 80px;
          width: 100%;
          min-height: 80px;
          height: fit-content;
          border-radius: 4px;
        }

        &:not(:last-of-type) {
          padding-bottom: 24px;
          border-bottom: 1px solid #f1f1f1;
          margin-bottom: 24px;
        }

        @media ${theme.mq.desktop} {
          margin: 0;

          &:not(:last-of-type) {
            margin-bottom: 0;
          }
        }
      }

      .card-row-spotlight__title {
        ${theme.typeStyles.h5};
      }

      .card-row-spotlight__path {
        position: relative;
        color: #2b2f51;
        text-decoration: none;
        &:after {
          content: '';
          position: absolute;
          inset: 0;
        }
      }
    `;
  }};
`;
