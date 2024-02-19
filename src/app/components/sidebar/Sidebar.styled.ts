import styled, { css } from 'styled-components';

export default styled.aside`
  ${({ theme }) => {
    return css`
      display: none;
      @media ${theme.mq.largeDesktop} {
        display: block;
      }
    `;
  }};
`;
