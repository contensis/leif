import styled, { css } from 'styled-components';

const NoResultsStyled = styled.div`
  ${() => {
    return css`
      .no-results__image {
        margin: 0 auto 24px;
        display: block;
        width: 240px;
        height: 240px;
        object-fit: cover;
      }
    `;
  }};
`;

export default NoResultsStyled;
