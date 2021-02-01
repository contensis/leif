import styled, { css } from 'styled-components';
import shape from '../assets/image-block-shape.svg';

const ImageBlockStyled = styled.div`
  ${() => {
    return css`
      text-align: center;
      .ibImageWrapper {
        max-width: 840px;
        width: 100%;
        margin: 0 auto;
        padding: 32px 32px 0 0;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background-image: url(${shape});
          background-repeat: no-repeat;
          background-position: top right;
        }
      }
      .ibImage {
        display: block;
        max-width: 100%;
      }
      .ibText {
        margin-top: 8px;
      }
    `;
  }};
`;

export default ImageBlockStyled;
