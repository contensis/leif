import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      .card-row__title {
        text-align: center;
      }

      .card-row__container {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        display: grid;
        display: grid;
        gap: 40px;
        @media ${theme.mq.largeDesktop} {
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }
      }

      .card-row__btn--wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 48px;
      }
    `;
  }};
`;
