import styled, { css } from 'styled-components';

interface Props {
  rating: string;
}

const RatingStyled = styled.div<Props>`
  ${({ theme, rating }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      .rating__star {
        path {
          fill: ${theme?.colors?.neutral_lightgrey};
        }
      }
      ${rating !== '0' &&
        css`
          .rating__star:nth-child(-n + ${rating}) {
            path {
              fill: ${theme?.colors?.warning};
            }
          }
        `}
    `;
  }};
`;

export default RatingStyled;
