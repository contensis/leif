import styled, { css } from 'styled-components';

const RatingStyled = styled.div`
  ${({ theme, rating }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      .rStar {
        path {
          fill: ${theme?.colors?.seashell};
        }
      }
      ${rating !== 0 &&
        css`
          .rStar:nth-child(-n + ${rating}) {
            path {
              fill: ${theme?.colors?.supernova};
            }
          }
        `}
    `;
  }};
`;

export default RatingStyled;
