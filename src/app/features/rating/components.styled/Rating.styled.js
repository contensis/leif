import styled, { css } from 'styled-components';

const RatingStyled = styled.div`
  ${({ rating }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      .rStar {
        path {
          fill: #f1f1f1;
        }
      }
      ${rating !== 0 &&
        css`
          .rStar:nth-child(-n + ${rating}) {
            path {
              fill: #ffc805;
            }
          }
        `}
    `;
  }};
`;

export default RatingStyled;
