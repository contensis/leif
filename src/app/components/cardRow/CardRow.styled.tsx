import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      .card-row__title {
        text-align: center;
        margin-bottom: 48px;
      }

      .card-row__container {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        display: grid;
        gap: 40px;
        @media ${theme.mq.largeDesktop} {
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
