import styled, { css } from 'styled-components';

const ImageStyled = styled.img`
  ${() => {
    return css`
      max-width: 100%;
    `;
  }};
`;

export default ImageStyled;
