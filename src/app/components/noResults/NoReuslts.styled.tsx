import styled, { css } from 'styled-components';

const NoResultsStyled = styled.div`
  ${() => {
    return css`
      .no-results__image {
        margin: 0 auto 24px;
        display: block;
      }
    `;
  }};
`;

export default NoResultsStyled;
