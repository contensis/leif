import styled, { css } from 'styled-components';

const SlideStyled = styled.div`
  ${() => {
  return css`
    height: 100%;
    width: 100%;
      .slide__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `;
  }};
`;

export default SlideStyled;
