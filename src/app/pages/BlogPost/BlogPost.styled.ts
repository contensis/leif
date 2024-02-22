import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      padding: 0 16px;
      margin-bottom: 120px;

      [data-component='canvas'] {
        padding: 0;
        margin: 0 auto;
      }
      p.lead {
        ${theme.typeStyles.h4};
        font-family: ${theme.typeStyles.fontFamily.headings};
      }

      [data-component='canvas'] > * {
        max-width: 620px;
        width: 100%;
        margin: 0 auto 24px;
      }

      [data-component='quote-block'] {
        max-width: 510px;
        width: 100%;
        margin: 80px auto;
        > * {
          max-width: 100%;
        }
      }

      [data-component='image-block'],
      [data-component='featured-product'],
      [data-component='video-block'] {
        max-width: 840px;
        width: 100%;
        margin: 80px auto;
      }
    `;
  }};
`;
