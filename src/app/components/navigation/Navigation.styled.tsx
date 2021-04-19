import styled, { css } from 'styled-components';

const NavigationStyled = styled.div`
  ${() => {
    return css`
      position: relative;
      .nav__btn-open {
        border: none;
        padding: 0;
        margin: 0;
        background-color: transparent;
      }
    `;
  }}
`;

export default NavigationStyled;
