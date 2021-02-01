import styled, { css } from 'styled-components';
import shape from '../assets/shape.svg';

const GenericHeroStyled = styled.div`
  ${() => {
    return css`
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: flex-end;
      .ghBack {
        margin-bottom: 104px;
      }
      .ghTitle {
        position: relative;
        flex-basis: calc(50% - 40px);
        padding-top: 24px;
        margin: 0;
        &:before {
          content: '';
          width: 100%;
          height: 100%;
          position: absolute;
          top: -80px;
          left: 0;
          background-image: url(${shape});
          background-repeat: no-repeat;
        }
      }
      .ghImage {
        display: block;
        max-width: 510px;
        width: 100%;
        margin-left: 40px;
      }
    `;
  }};
`;

export default GenericHeroStyled;
