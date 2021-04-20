import styled, { css } from 'styled-components';

const NavigationStyled = styled.div`
  ${({ theme }) => {
    return css`
      position: relative;
      height: 64px;
      @media ${theme.mq.laptop} {
        height: 80px;
      }
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
