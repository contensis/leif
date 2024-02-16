import styled, { css } from 'styled-components';

const CanvasStyled = styled.div`
  ${({ theme }) => css`
    padding: 16px 0;

    /* p.lead {
      ${theme.typeStyles.h4};
      font-family: ${theme.typeStyles.fontFamily.headings};
    }

    > * {
      max-width: 620px;
      width: 100%;
      margin: 0 auto;
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

    [data-component='table-block'] {
      margin: 80px auto;
      max-width: 720px;
    }

    [data-component='quote-block'] {
      margin: 80px auto;
    }

    [data-component='image-block'],
    [data-component='featured-product'],
    [data-component='card-row'] {
      max-width: 840px;
      width: 100%;
      margin: 80px auto;
    } */
  `}
`;

export default CanvasStyled;
