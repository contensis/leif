import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      padding: 0 16px;
      margin-bottom: 120px;

      .content-page__wrapper {
        max-width: 1280px;
        width: 100%;
        margin: 40px auto;
        @media ${theme.mq.largeDesktop} {
          display: grid;
          grid-template-columns: 840px 1fr;
          gap: 150px;
        }
      }

      &[data-content='hero-image'] {
        padding: 0;
        [data-component='canvas'] {
          padding: 0 16px;
        }
      }

      [data-component='canvas'] {
        padding: 0;
        margin: 0 auto;
        @media ${theme.mq.largeDesktop} {
          margin: 0 0 0 auto;
        }

        p.lead {
          ${theme.typeStyles.h4};
          font-family: ${theme.typeStyles.fontFamily.headings};
        }

        > * {
          max-width: 730px;
          width: 100%;
          margin: 0 auto;
          @media ${theme.mq.largeDesktop} {
            margin: 0 0 0 auto;
          }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin-bottom: 24px;
        }

        [data-component='callout-block'] {
          margin: 24px auto;
        }

        [data-component='table-block'],
        [data-component='cta-block'] {
          margin: 80px auto;
          max-width: 730px;
        }

        [data-component='quote-block'] {
          margin: 80px auto;
        }

        [data-component='image-block'],
        [data-component='featured-product'] {
          max-width: 840px;
          width: 100%;
          margin: 80px auto;
        }

        [data-component='card-row'] {
          max-width: 1280px;
          width: 100%;
          margin: 80px auto;
        }
      }
    `;
  }};
`;
