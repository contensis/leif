import styled, { css } from 'styled-components';

export default styled.div`
  ${({ theme }) => {
    return css`
      [data-component='cta-block'],
      [data-component='card-row'] {
        margin: 80px auto;
        @media ${theme.mq.laptop} {
          margin: 120px auto;
        }
      }
    `;
  }};
`;
