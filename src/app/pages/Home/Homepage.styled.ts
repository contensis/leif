import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      [data-component='cta-block'],
      [data-component='card-row'] {
        margin: 100px auto;
        @media ${theme.mq.laptop} {
          margin: 140px auto;
        }
      }
    `;
  }};
`;
