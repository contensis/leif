import styled, { css } from 'styled-components';

interface Props {
  imageUri: string;
  hasScrollImage?: boolean;
}

const SlideStyled = styled.div`
  ${({ hasScrollImage, imageUri }: Props) => {
    return css`
      height: 100%;
      width: 100%;
      .slide__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      ${hasScrollImage &&
        css`
          max-width: 1060px;
          width: 100%;
          margin: 0 auto;
          .slide__bg-image-wrapper {
            max-width: 1060px;
            width: 100%;
            overflow: auto;
            height: 648px;
            position: relative;
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
            &::-webkit-scrollbar {
              display: none;
            }
          }
          .slide__bg-image {
            height: 150%;
            width: 150%;
            background-image: url(${imageUri});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
        `}
    `;
  }};
`;

export default SlideStyled;
