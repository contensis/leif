import styled, { css } from 'styled-components';
import shape from './assets/image-block-shape.svg';

const ImageBlockStyled = styled.div`
  ${({ theme }) => {
    return css`
      text-align: center;
      overflow: hidden;
      .image-block__wrapper {
        max-width: 840px;
        width: 100%;
        margin: 0 auto;
        position: relative;
        padding: 32px 0 0 0;
        &:before {
          content: '';
          position: absolute;
          top: 0;
          right: -50%;
          width: 100%;
          height: 100%;
          background-image: url(${shape});
          background-repeat: no-repeat;
        }
        @media ${theme.mq.tablet} {
          padding: 32px 32px 0 0;
          &:before {
            right: 0;
            background-position: top right;
          }
        }
      }
      .image-block__image {
        display: block;
        max-width: 100%;
      }
      .image-block__title {
        margin: 24px 0 0 0;
        font-family: ${theme?.typeStyles?.fontFamily?.headings};
        ${theme?.typeStyles?.h6};
      }
      .image-block__text {
        margin: 8px 0 0 0;
        color: ${theme?.colors?.kimberly};
        ${theme?.typeStyles?.smallCopy};
      }
    `;
  }};
`;

export default ImageBlockStyled;
