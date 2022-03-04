import styled, { css } from 'styled-components';

interface Props {
  theme?: any;
  align?: string;
}

const ImageBlockStyled = styled.div`
  ${({ theme, align }: Props) => {
    return css`
      text-align: ${align};
      overflow: hidden;
      max-width: 840px;
      width: 100%;
      margin: 0 auto;
      padding: 32px 0 0 0;
      @media ${theme.mq.tablet} {
        padding: 32px 32px 0 0;
      }
      .image-block__wrapper {
        position: relative;
        &:before {
          content: '';
          position: absolute;
          top: -32px;
          right: -50%;
          width: 100%;
          height: 100%;
          background-image: url('/static/img/svgs/shapes/image-block-shape.svg');
          background-repeat: no-repeat;
        }
        @media ${theme.mq.tablet} {
          &:before {
            right: -32px;
            background-position: top right;
          }
        }
      }
      .image-block__image {
        display: block;
        object-fit: cover;
        max-width: 100%;
        max-height: 480px;
        margin: 0 auto;
      }
      .image-block__text {
        margin: 24px 0 0 0;
        color: ${theme.colors.secondary_light};
        ${theme.typeStyles.smallCopy};
      }
    `;
  }};
`;

export default ImageBlockStyled;
